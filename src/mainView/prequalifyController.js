const annotation = ['$http', '$state', 'localStorageService'];

import queryString from 'query-string';

class prequalifyController {
  constructor($http, $state, localStorageService) {
    this.$http = $http;
    this.$state = $state;
    this.localStorageService = localStorageService;
    this.formSubmitted = false;
    this.typeOfBusinessArr = ['Accounting', 'Amusement', 'AutoRepair', 'BusinessServices', 'Catering',
      'ChildCare', 'ComputerServices', 'ConsumerGoodsRetailStore', 'ConsumerGoodsOnlineStore', 'ConsumerGoodsOnlineAndOffline',
      'Construction', 'Dentists', 'DryCleaning', 'Equipment', 'Grocery', 'Health', 'HomeRepair',
      'Hotels', 'Insurance', 'Janitorial', 'Landscape', 'Optometrists', 'Physicians', 'Restaurants',
      'Salons', 'Taxis', 'Trucking', 'Veterinarians'];
  }

  successCallback(response) {
    if (response.data.Qualified) {
      this.localStorageService.set('qualifiedAmount', response.data.QualifyAmount);
      this.localStorageService.set('redirectUrl', response.data.RedirectUrl);
      this.$state.go('qualified');
    } else {
      this.$state.go('unqualified');
    }

  }

  errorCallback(response) {
    console.log('error', response);
    this.$state.go('error');
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.myForm.$valid) {
      this.$http({
        method: 'POST',
        url: 'https://api.kabbage.com/v2/prequalify',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache'
        },
        data: queryString.stringify({
          firstName: this.userInfo.firstName,
          lastName: this.userInfo.lastName,
          emailAddress: this.userInfo.email,
          businessName: this.userInfo.businessName,
          phoneNumber: this.userInfo.phoneNumber,
          yearStarted: this.userInfo.yearStarted,
          estimatedFICO: this.userInfo.estimatedFICO,
          estimatedAnnualRevenue: this.userInfo.estimatedAnnualRevenue,
          grossPercentageFromCards: this.userInfo.grossPercentageFromCards,
          typeOfBusiness: this.userInfo.typeOfBusiness.replace(/(\r\n|\n|\r)/gm,"").trim(),
          api_key: this.userInfo.api_key
        })
      }).
      then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
  }

}

prequalifyController.$inject = annotation;
export default prequalifyController;
