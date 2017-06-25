require('angular-mocks');
import queryString from 'query-string';

describe("Test for prequalifyController ", () => {

  beforeEach(angular.mock.module('prequalifyApp'));

  let state, http, controllerService, prequalifyController, httpBackend, $localStorageService;

  beforeEach(inject( ($state, $controller, $http, $httpBackend, _localStorageService_ ) => {

    state = $state;
    http = $http;
    controllerService = $controller;
    httpBackend = $httpBackend;
    $localStorageService = _localStorageService_;

    prequalifyController = controllerService('prequalifyController', {
      $state: state,
      $http: http,
      localStorageService: $localStorageService
    });
  }));

  it('test prequalifyController initialization', () => {
    expect(prequalifyController.formSubmitted).toBeFalsy();
    expect(prequalifyController.typeOfBusinessArr.length).toEqual(28);
  });

  it('test submitForm function succeed', () => {
    let url = 'https://api.kabbage.com/v2/prequalify',
        data = queryString.stringify({
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
        }),
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache'
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

    /*neutralize the error by making the $httpBackend mock ignore GET request, otherwise will get
    Error: Unexpected request: GET /mainView/prequalifyView.html
    	No more request expected
    */
    httpBackend.whenGET(/^.*$/).respond(200, '');
    //Set the $http.post to succeed
    httpBackend.whenPOST(url, data).respond(200, 'success');

    prequalifyController.myForm = {
      $valid: true
    };

    prequalifyController.submitForm();
    // httpBackend.flush();

    expect(prequalifyController.formSubmitted).toBeTruthy();
    expect(prequalifyController.successCallback).toHaveBeenCalled();
    expect(prequalifyController.errorCallback).not.toHaveBeenCalled();

  });

    it('test submitForm function failed', () => {
    let url = 'https://api.kabbage.com/v2/prequalify',
        data = queryString.stringify({
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
        }),
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache'
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

    /*
    Neutralize the error by making the $httpBackend mock ignore GET request, otherwise will get
    Error: Unexpected request: GET /mainView/prequalifyView.html
    No more request expected
    */
    httpBackend.whenGET(/^.*$/).respond(200, '');

    //Set the $http.post to fail
    httpBackend.whenPOST(url, data).respond(400, 'error');

    prequalifyController.myForm = {
      $valid: true
    };

    prequalifyController.submitForm();
    // httpBackend.flush();

    expect(prequalifyController.formSubmitted).toBeTruthy();
    expect(prequalifyController.successCallback).not.toHaveBeenCalled();
    expect(prequalifyController.errorCallback).toHaveBeenCalled();
  });

  it('test successCallback function when Qualified is true', ()=> {
    spyOn(prequalifyController.$state, 'go');

    let fakeReponse = {
      data: {
        Qualified: true,
        QualifyAmount: 100,
        RedirectUrl: 'https://api.kabbage.com/v2/prequalify'
      }
    };

    prequalifyController.successCallback(fakeReponse);

    expect(prequalifyController.localStorageService.get('qualifiedAmount')).toEqual(100);
    expect(prequalifyController.localStorageService.get('redirectUrl')).toEqual('https://api.kabbage.com/v2/prequalify')
    expect(prequalifyController.$state.go).toHaveBeenCalledWith('qualified');
  });

  it('test successCallback function when Qualified is false', ()=> {
    spyOn(prequalifyController.$state, 'go');

    let fakeReponse = {
      data: {
        Qualified: false,
        QualifyAmount: 0,
        RedirectUrl: null
      }
    };

    prequalifyController.successCallback(fakeReponse);

    expect(prequalifyController.$state.go).toHaveBeenCalledWith('unqualified');
  });
});
