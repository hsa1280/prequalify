import angular from 'angular';
import unqualifiedStateProvider from './unqualifiedStateProvider';

export default angular.
    module('unqualifiedModule', []).
    config(unqualifiedStateProvider);
