import angular from 'angular';
import qualifiedStateProvider from './qualifiedStateProvider';

export default angular.
    module('qualifiedModule', []).
    config(qualifiedStateProvider);
