require('angular-mocks');

describe("Test for qualifiedController ", () => {

  beforeEach(angular.mock.module('prequalifyApp'));

  let stateParams, controllerService, qualifiedController;

  beforeEach(inject( ($controller, $stateParams) => {

    stateParams = $stateParams;
    stateParams = {
      qualifiedAmount: 10000,
      redirectUrl: 'https://api.kabbage.com/v2/prequalify'
    }
    controllerService = $controller;

    qualifiedController = controllerService('qualifiedController', {
      $stateParams: stateParams
    });
  }));

  it('test qualifiedController initialization', () => {
    expect(qualifiedController.qualifiedAmount).toEqual(10000);
    expect(qualifiedController.redirectUrl).toEqual('https://api.kabbage.com/v2/prequalify');
  });

});
