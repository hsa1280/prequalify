const annotation = ['$stateProvider'];

function qualifiedStateProvider($stateProvider) {
    $stateProvider.
        state('qualified', {
            url: '/qualified',
            views: {
                'content': {
                    templateUrl: '/qualifiedView/qualifiedView.html',
                    controller: 'qualifiedController as qualifiedController'
                }
            }
        })
}

qualifiedStateProvider.$inject = annotation;
export default qualifiedStateProvider;
