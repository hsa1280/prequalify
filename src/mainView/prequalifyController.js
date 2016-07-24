const annotation = ['$http', '$state'];

class prequalifyController {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.formSubmitted = false;
    this.typeOfBusinessArr = ['Accounting', 'Amusement', 'AutoRepair', 'BusinessServices', 'Catering',
      'ChildCare', 'ComputerServices', 'ConsumerGoodsRetailStore', 'ConsumerGoodsOnlineStore', 'ConsumerGoodsOnlineAndOffline',
      'Construction', 'Dentists', 'DryCleaning', 'Equipment', 'Grocery', 'Health', 'HomeRepair',
      'Hotels', 'Insurance', 'Janitorial', 'Landscape', 'Optometrists', 'Physicians', 'Restaurants',
      'Salons', 'Taxis', 'Trucking', 'Veterinarians'];
  }

  successCallback(response) {
    if (response.data.Qualified) {
      this.QualifyAmount = response.data.QualifyAmount;
      this.RedirectUrl = response.data.RedirectUrl;
      //Change the name back
      this.$state.go('qualified');
    } else {
      //Change the name back
      this.$state.go('unqualified');
    }

  }

  errorCallback(response) {
    console.log('error', response);
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.myForm.$valid) {
      this.$http({
        method: 'POST',
        url: 'http://api.kabbage.com/v2/prequalify',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          firstName: this.userInfo.firstName,
          lastName: this.userInfo.lastName,
          emailAddress: this.userInfo.email,
          businessName: this.userInfo.businessName,
          phoneNumber: this.userInfo.phoneNumber,
          yearStarted: this.userInfo.yearStarted,
          estimatedFICO: this.userInfo.estimatedFICO,
          estimatedAnnualRevenue: this.userInfo.estimatedAnnualRevenue,
          grossPercentageFromCards: this.userInfo.grossPercentageFromCards,
          typeOfBusiness: this.userInfo.typeOfBusiness,
          api_key: this.userInfo.api_key
        }
      }).
      then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
  }

}

prequalifyController.$inject = annotation;
export default prequalifyController;
