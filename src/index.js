const inject = ( ...values ) => function( target ) {
    target.$inject = values;
};

window.inject = inject;

import angular from 'angular';
import 'angular-ui-router';
import prequalify from './mainView/index';

var prequalifyApp = angular.module('prequalifyApp', [ 'ui.router', prequalify.name]);

export default prequalifyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/prequalify");
});
