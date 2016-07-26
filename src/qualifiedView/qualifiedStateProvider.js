const annotation = ['$stateProvider'];

function qualifiedStateProvider($stateProvider) {
    $stateProvider.
        state('qualified', {
            url: '/qualified?qualifiedAmount&redirectUrl',
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
