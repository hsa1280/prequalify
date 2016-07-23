const annotation = ['$stateProvider'];

function prequalifyStateProvider($stateProvider) {
    $stateProvider.
        state('prequalify', {
            url: '/prequalify',
            views: {
                'content': {
                    templateUrl: '/main-view/prequalifyView.html',
                    controller: 'prequalifyController as prequalifyController'
                }
            }
        })
}

prequalifyStateProvider.$inject = annotation;
export default prequalifyStateProvider;
