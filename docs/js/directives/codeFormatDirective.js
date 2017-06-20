angular.module('docs').directive('codeFormat', function ($sce) {
    return {
        templateUrl: 'view/code-format-directive.html',
        replace: true,
        restricet: 'E',
        scope: {
            code: '@',
            class: '@'
        },
        link: function ($scope, $element) {
            $scope.html = $sce.trustAsHtml($scope.code);

            setTimeout(function () {
                var anchor = $element[0].querySelector('[data-toggle="tab"]:last-child');
                var init = new Tabs(anchor, anchor.dataset);
                init.show(anchor);
            }, 1);
        }
    };
});