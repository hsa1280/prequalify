require('angular-mocks');

describe("Test for prequalifyController ", () => {

  beforeEach(angular.mock.module('prequalifyApp'));

  let state, http, controllerService, prequalifyController, httpBackend;

  beforeEach(inject( ($state, $controller, $http, $httpBackend ) => {

    state = $state;
    http = $http;
    controllerService = $controller;
    httpBackend = $httpBackend;

    prequalifyController = controllerService('prequalifyController', {
      $state: state,
      $http: http
    });
  }));

  it('test submitForm function succeed', () => {
    let url = 'http://api.kabbage.com/v2/prequalify',
        data = {
          firstName: 'shian',
          lastName: 'huang',
          emailAddress: 'shian@gmail.com',
          businessName: 'shian huang',
          phoneNumber: '352-284-6190',
          yearStarted: '2013',
          estimatedFICO: 700,
          estimatedAnnualRevenue: 90000,
          grossPercentageFromCards: 85,
          typeOfBusiness: 'Accounting',
          api_key: 'abc'
        },
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };

    let userInfo = {
      firstName: 'shian',
      lastName: 'huang',
      email: 'shian@gmail.com',
      businessName: 'shian huang',
      phoneNumber: '352-284-6190',
      yearStarted: '2013',
      estimatedFICO: 700,
      estimatedAnnualRevenue: 90000,
      grossPercentageFromCards: 85,
      typeOfBusiness: 'Accounting',
      api_key: 'abc'
    };

    spyOn(prequalifyController, 'successCallback');
    spyOn(prequalifyController, 'errorCallback');

    prequalifyController.userInfo = userInfo;

    //Set the $http.post to succeed
    httpBackend.expectPOST(url, data).respond(200, 'success');

    prequalifyController.myForm = {
      $valid: true
    };

    prequalifyController.submitForm();
    httpBackend.flush();

    expect(prequalifyController.successCallback).toHaveBeenCalled();
    expect(prequalifyController.errorCallback).not.toHaveBeenCalled();

  });

    it('test submitForm function failed', () => {
    let url = 'http://api.kabbage.com/v2/prequalify',
        data = {
          firstName: 'shian',
          lastName: 'huang',
          emailAddress: 'shian@gmail.com',
          businessName: 'shian huang',
          phoneNumber: '352-284-6190',
          yearStarted: '2013',
          estimatedFICO: 700,
          estimatedAnnualRevenue: 90000,
          grossPercentageFromCards: 85,
          typeOfBusiness: 'Accounting',
          api_key: 'abc'
        },
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };

    let userInfo = {
      firstName: 'shian',
      lastName: 'huang',
      email: 'shian@gmail.com',
      businessName: 'shian huang',
      phoneNumber: '352-284-6190',
      yearStarted: '2013',
      estimatedFICO: 700,
      estimatedAnnualRevenue: 90000,
      grossPercentageFromCards: 85,
      typeOfBusiness: 'Accounting',
      api_key: 'abc'
    };

    spyOn(prequalifyController, 'successCallback');
    spyOn(prequalifyController, 'errorCallback');

    prequalifyController.userInfo = userInfo;

    //Set the $http.post to fail
    httpBackend.expectPOST(url, data).respond(400, 'success');

    prequalifyController.myForm = {
      $valid: true
    };

    prequalifyController.submitForm();
    httpBackend.flush();

    expect(prequalifyController.successCallback).not.toHaveBeenCalled();
    expect(prequalifyController.errorCallback).toHaveBeenCalled();
  });
});
