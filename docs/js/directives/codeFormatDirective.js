angular.module('docs').directive('codeFormat', function ($sce) {
    return {
        templateUrl: 'view/code-format-directive.html',
        replace: true,
        restricet: 'E',
        scope: {
            code: '@'
        },
        link: function ($scope) {
            $scope.html = $sce.trustAsHtml($scope.code);
        }
    };
});