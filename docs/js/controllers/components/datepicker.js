angular.module('docs').controller('components.datepickerCtrl', function ($scope) {
    $scope.$parent.title = 'Datepicker';

    $scope.codes = {
        basic: (
            '<input class="input" value="2017-01-01" size="10" readonly data-toggle="datepicker"/>'
        ),
        colors: (
            '<input class="input input-red-6-f" value="2017-01-01" size="10" placeholder="Focus me" readonly data-toggle="datepicker" data-color="red-6"/>'
        ),
        min_max: (
            '<input class="input" size="10" placeholder="Focus me" readonly data-toggle="datepicker" data-min="-7" data-max="10"/>'
        )
    }
});