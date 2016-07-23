const inject = ( ...values ) => function( target ) {
    target.$inject = values;
};

window.inject = inject;

import angular from 'angular';
import 'angular-ui-router';
import prequalify from './mainView/index';
import qualified from './qualifiedView/index';
import unqualified from './unqualifiedView/index';

var prequalifyApp = angular.module('prequalifyApp', [ 'ui.router', prequalify.name, qualified.name, unqualified.name ]);

export default prequalifyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/prequalify");
});
