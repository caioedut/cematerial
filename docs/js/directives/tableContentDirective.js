angular.module('docs').directive('tableContent', function () {
    return {
        templateUrl: 'view/table-content-directive.html',
        replace: true,
        restricet: 'E',
        scope: {
            color: '@',
            target: '@'
        },
        link: function ($scope) {
            if (!$scope.color) {
                $scope.color = 'blue';
            }

            if (!$scope.target) {
                $scope.target = '.layout-content';
            }

            $scope.scrollTo = function (tcId) {
                var $target = document.querySelector('[tcid="' + tcId + '"]');
                document.querySelector('.layout-content').scrollTop = $target.offsetTop - 24;
            };

            $scope.headlines = [];

            var $target = document.querySelector($scope.target);

            if ($target) {
                var headlines = $target.querySelectorAll('h1, h2, h3, h4, h5, h6');

                var prev = {tagName: null}, indent = 0;

                headlines.forEach(function (item, i) {
                    item.setAttribute('tcId', i);

                    if (item.tagName != prev.tagName) {
                        if (item.parentElement === prev.parentElement) {
                            indent += 16;
                        } else if (indent) {
                            indent -= 16;
                        }
                    }

                    prev = item;

                    $scope.headlines.push({
                        tcId: i,
                        indent: indent,
                        label: item.innerText
                    });
                });

                // $scope.headlines = headlines;
            }
        }
    };
});