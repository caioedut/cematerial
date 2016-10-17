angular.module('docs').config(function ($routeProvider) {
    $routeProvider
        .when('/getting-started/:view', {
            //controller: 'gettingStartedCtrl',
            templateUrl: function (params) {
                return 'view/getting-started/' + params.view + '.html';
            }
        })
        .otherwise({redirectTo: '/getting-started/introduction'})
    ;
});