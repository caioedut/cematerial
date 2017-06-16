angular.module('docs').controller('components.appbarCtrl', function ($scope) {
    $scope.$parent.title = 'App Bar';

    $scope.codes = {
        basic: (
            '<div class="layout-header bg-blue-6 app-bar">' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6 waves">' + "\n" +
            '        <i class="md-icon">menu</i>' + "\n" +
            '    </button>' + "\n" +
            '    <h1 class="layout-title mg-left-md">' + "\n" +
            '        Header' + "\n" +
            '    </h1>' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6 waves col-right">' + "\n" +
            '        <i class="md-icon">search</i>' + "\n" +
            '    </button>' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6 waves">' + "\n" +
            '        <i class="md-icon">more_vert</i>' + "\n" +
            '    </button>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});