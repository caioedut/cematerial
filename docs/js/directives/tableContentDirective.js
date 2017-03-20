angular.module('docs').directive('tableContent', function () {
    return {
        templateUrl: 'view/table-content-directive.html',
        replace: true,
        restricet: 'E',
        scope: {
            color: '@',
            target: '@'
        },
        link: function ($scope, $el) {
            if (!$scope.color) {
                $scope.color = 'blue';
            }

            if (!$scope.target) {
                $scope.target = '.layout-content';
            }

            var $target = document.querySelector($scope.target);

            if ($target) {
                var headlines = $target.querySelectorAll('h1, h2, h3, h4, h5, h6');

                var prev = {tagName: null}, indent = 0;

                headlines.forEach(function (item) {
                    if (item.tagName != prev.tagName) {
                        if (item.parentElement === prev.parentElement) {
                            indent += 16;
                        } else if (indent) {
                            indent -= 16;
                        }
                    }

                    prev = item;
                    item.indent = indent;
                });

                $scope.headlines = headlines;
            }
        }
    };
});