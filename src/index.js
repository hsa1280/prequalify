import angular from 'angular';
import 'angular-ui-router';
import prequalify from './mainView/index';
import qualified from './qualifiedView/index';
import 'angular-local-storage';

var prequalifyApp = angular.module('prequalifyApp', [ 'ui.router', 'LocalStorageModule', prequalify.name, qualified.name]);

export default prequalifyApp.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  localStorageServiceProvider.setStorageType('sessionStorage');
  $urlRouterProvider.otherwise("/prequalify");
});
