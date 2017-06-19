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
        ),
        search: (
            '<div class="layout-header bg-blue-6 app-bar">' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6 waves">' + "\n" +
            '        <i class="md-icon">menu</i>' + "\n" +
            '    </button>' + "\n" +
            '    <h1 class="layout-title mg-left-md xs-hidden">' + "\n" +
            '        Header' + "\n" +
            '    </h1>' + "\n" +
            '    <div class="col-center xs-col-6">' + "\n" +
            '        <label class="grid grid-middle pd-sm set-round bg-blue-5">' + "\n" +
            '            <div class="grid-col">' + "\n" +
            '                <i class="md-icon">search</i>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="grid-col mg-left-md col-fill">' + "\n" +
            '                <input class="input no-style" type="text" placeholder="Search"/>' + "\n" +
            '            </div>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6 waves">' + "\n" +
            '        <i class="md-icon">more_vert</i>' + "\n" +
            '    </button>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});