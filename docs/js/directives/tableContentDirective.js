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
                $scope.target = '.layout-body';
            }

            function animateScroll(to, duration) {
                var element = document.querySelector('.layout-body');

                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;

                setTimeout(function () {
                    element.scrollTop = element.scrollTop + perTick;
                    if (element.scrollTop === to) return;
                    animateScroll(to, duration - 10);
                }, 10);
            }

            $scope.scrollTo = function (tcId) {
                var $target = document.querySelector('[tcid="' + tcId + '"]');
                var duration = $target.offsetTop / 3;
                animateScroll($target.offsetTop - 24, duration);
            };

            $scope.headlines = [];

            var $target = document.querySelector($scope.target);

            if ($target) {
                var headlines = $target.querySelectorAll('h1, h2, h3, h4, h5, h6');
                var first = Infinity;

                headlines.forEach(function (item) {
                    var number = parseInt(item.tagName.replace(/\D/g, ''));
                    if (number < first) {
                        first = number;
                    }
                });

                headlines.forEach(function (item, i) {
                    var number = parseInt(item.tagName.replace(/\D/g, ''));
                    var indent = (number - first) * 16;

                    item.setAttribute('tcId', i);

                    $scope.headlines.push({
                        tcId: i,
                        indent: indent,
                        label: item.innerText
                    });
                });
            }
        }
    };
});