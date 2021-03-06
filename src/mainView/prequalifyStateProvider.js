const annotation = ['$stateProvider'];

function prequalifyStateProvider($stateProvider) {
    $stateProvider.
        state('prequalify', {
            url: '/prequalify',
            views: {
                'content': {
                    templateUrl: '/mainView/prequalifyView.html',
                    controller: 'prequalifyController as prequalifyController'
                }
            }
        })
        .state('error', {
			      url: '/error',
            views: {
                'content': {
                    templateUrl: '/mainView/error.html',
                    controller: ''
                }
            }
        })
        .state('unqualified', {
			      url: '/unqualified',
            views: {
                'content': {
                    templateUrl: '/mainView/unqualifiedView.html',
                    controller: ''
                }
            }
        })
}

prequalifyStateProvider.$inject = annotation;
export default prequalifyStateProvider;
