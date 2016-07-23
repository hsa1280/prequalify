require('angular-mocks');

describe("Test for prequalifyController ", () => {

  beforeEach(angular.mock.module('prequalifyApp'));

  let state, http, controllerService, prequalifyController;

  beforeEach(inject( ($state, $controller, $http ) => {

    state = $state;
    http = $http;
    controllerService = $controller;

    prequalifyController = controllerService('prequalifyController', {
      $state: state,
      $http: http
    });
  }));

  it('test formSubmitted', () => {
    expect(prequalifyController.formSubmitted).toBeFalsy();
  })
});
