import angular from 'angular';
import qualifiedStateProvider from './qualifiedStateProvider';
import qualifiedController from './qualifiedController';

export default angular.
       module('qualifiedModule', []).
       config(qualifiedStateProvider).
       controller('qualifiedController', qualifiedController);
