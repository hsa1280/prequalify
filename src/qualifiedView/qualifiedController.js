const annotation = ['localStorageService'];

class qualifiedController {
  constructor(localStorageService) {
    this.qualifiedAmount = localStorageService.get('qualifiedAmount');
    this.redirectUrl = localStorageService.get('redirectUrl');
  }
}

qualifiedController.$inject = annotation;
export default qualifiedController;
