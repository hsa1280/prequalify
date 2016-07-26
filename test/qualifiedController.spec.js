require('angular-mocks');

describe("Test for qualifiedController ", () => {

  beforeEach(angular.mock.module('prequalifyApp'));

  let controllerService, qualifiedController;

  beforeEach(inject( ($controller) => {
    controllerService = $controller;

    qualifiedController = controllerService('qualifiedController', {});
  }));

  it('test qualifiedController initialization', () => {
    expect(qualifiedController.qualifiedAmount).toEqual(100);
    expect(qualifiedController.redirectUrl).toEqual('https://api.kabbage.com/v2/prequalify');
  });

});
