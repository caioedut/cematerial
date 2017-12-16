angular.module('docs').controller('components.datepickerCtrl', function ($scope) {
    $scope.$parent.title = 'Datepicker';

    $scope.events = {
        'cem.datepicker.beforeShow': 'Datepicker dialog is called, but not opened yet',
        'cem.datepicker.show': 'Datepicker dialog is opened',
        'cem.datepicker.beforeHide': 'Datepicker dialog close action is triggered, but not closed yet',
        'cem.datepicker.hide': 'Datepicker dialog is closed'
    };

    $scope.codes = {
        basic: (
            '<input class="input" value="2017-01-01" size="10" readonly data-toggle="datepicker"/>'
        ),
        colors: (
            '<input class="input input-red-6-f" value="2017-01-01" size="10" placeholder="Click me" readonly data-toggle="datepicker" data-color="red-6"/>'
        ),
        min_max: (
            '<input class="input" size="10" placeholder="Click me" readonly data-toggle="datepicker" data-min="-7" data-max="10"/>'
        ),
        handler: (
            '<div class="grid grid-nowrap">' + "\n" +
            '    <input id="inputDate" class="input" size="10" placeholder="__/__/____" readonly/>' + "\n" +
            '    <button class="btn btn-icon btn-circle" type="button" data-toggle="datepicker" data-target="#inputDate">' + "\n" +
            '        <i class="md-icon">event</i>' + "\n" +
            '    </button>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    };
});