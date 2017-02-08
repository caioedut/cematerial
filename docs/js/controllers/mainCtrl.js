angular.module('docs').controller('mainCtrl', function ($scope, $sce, navs) {

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

    $scope.html = function (str) {
        return $sce.trustAsHtml(str);
    };
});