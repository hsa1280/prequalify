import angular from 'angular';
import prequalifyController from './prequalifyController';
import prequalifyStateProvider from './prequalifyStateProvider';

export default angular.
    module('prequalifyModule', []).
    config(prequalifyStateProvider).
    controller('prequalifyController', prequalifyController);
