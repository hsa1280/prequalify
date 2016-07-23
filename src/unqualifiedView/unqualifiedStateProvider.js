const annotation = ['$stateProvider'];

function unqualifiedStateProvider($stateProvider) {
    $stateProvider.
        state('unqualified', {
            url: '/unqualified',
            views: {
                'content': {
                    templateUrl: '/unqualifiedView/unqualifiedView.html',
                    controller: ''
                }
            }
        })
}

unqualifiedStateProvider.$inject = annotation;
export default unqualifiedStateProvider;
