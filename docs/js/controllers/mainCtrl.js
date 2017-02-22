angular.module('docs').controller('mainCtrl', function ($scope, $rootScope, $sce, navs) {
    $rootScope.$on('$stateChangeStart', function (e, toState) {
        $scope.navs.forEach(function (nav) {
            nav.active = false;
            nav.links.forEach(function (link) {
                link.active = false;
                if (link.href === toState.url) {
                    nav.active = true;
                    link.active = true;
                }
            })
        });
    });

    $scope.title = 'Docs';
    $scope.color = 'blue';

    $scope.navs = navs.filter(function (nav) {
        return nav.links && nav.links.length;
    });

    $scope.closeSidebar = function () {
        var target = document.querySelector('#main-sidebar');
        var init = target['cem.sidebar'] || new Sidebar(target);
        init.hide();
    };

    $scope.changeColor = function (color) {
        $scope.color = color;
    };

    $scope.html = function (str) {
        return $sce.trustAsHtml(str);
    };
});