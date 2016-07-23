const annotation = ['$http'];

class prequalifyController {
  constructor($http) {
    this.$http = $http;
    this.formSubmitted = false;
    this.typeOfBusinessArr = ['Accounting', 'Amusement', 'AutoRepair', 'BusinessServices', 'Catering', 'ChildCare', 'ComputerServices', 'ConsumerGoodsRetailStore', 'ConsumerGoodsOnlineStore', 'ConsumerGoodsOnlineAndOffline', 'Construction', 'Dentists', 'DryCleaning', 'Equipment', 'Grocery', 'Health', 'HomeRepair', 'Hotels', 'Insurance', 'Janitorial', 'Landscape', 'Optometrists', 'Physicians', 'Restaurants', 'Salons', 'Taxis', 'Trucking', 'Veterinarians'];
  }

  successCallback(response) {
    console.log('success', response);
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
          typeOfBusiness: 'Accounting',
          api_key: this.userInfo.api_key
        }
      }).
      then(this.successCallback, this.errorCallback);
    }
  }

}

prequalifyController.$inject = annotation;
export default prequalifyController;
