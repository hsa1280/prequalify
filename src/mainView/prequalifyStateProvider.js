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
        .state('qualified1', {
			url: '/qualified1',
            views: {
                'content': {
                    templateUrl: '/mainView/qualifiedView.html',
                    controller: 'prequalifyController as prequalifyController'
                }
            }
        })
        .state('unqualified1', {
			url: '/unqualified1',
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
