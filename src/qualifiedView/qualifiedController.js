const annotation = ['$stateParams'];

class qualifiedController {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.qualifiedAmount = this.$stateParams.qualifiedAmount;
    this.redirectUrl = this.$stateParams.redirectUrl;
  }
}

qualifiedController.$inject = annotation;
export default qualifiedController;
