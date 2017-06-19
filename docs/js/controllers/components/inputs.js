angular.module('docs').controller('components.inputsCtrl', function ($scope) {
    $scope.$parent.title = 'Inputs';

    $scope.codes = {
        basic: (
            '<input class="input" value="My input value"/>'
        ),
        grid: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-4">' + "\n" +
            '        <input class="input" value="My input"/>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-4">' + "\n" +
            '        <select class="input" value="My input">' + "\n" +
            '            <option value="1">Option 1</option>' + "\n" +
            '            <option value="2">Option 2</option>' + "\n" +
            '        </select>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-4">' + "\n" +
            '        <textarea class="input">My textarea</textarea>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-6 sm-col-4 md-col-3 lg-col-2">' + "\n" +
            '        <label class="grid grid-nowrap grid-bottom">' + "\n" +
            '            <i class="md-icon">phone</i>' + "\n" +
            '            <input class="input col-fill"/>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-6 sm-col-4 md-col-3 lg-col-2">' + "\n" +
            '        <label class="grid grid-nowrap grid-middle">' + "\n" +
            '            <i class="md-icon">remove_circle_outline</i>' + "\n" +
            '            <input class="input col-fill"/>' + "\n" +
            '            <i class="md-icon">add_circle_outline</i>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        colors: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '        <input class="input input-blue-6" value="My colored input"/>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '        <input class="input input-blue-6-f" value="My colored input when focused"/>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        labels_basic: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '        <label class="label text-blue-6">' + "\n" +
            '            <span class="label-text">Input Label (Color)</span>' + "\n" +
            '            <input class="input input-blue-6" value="My colored input"/>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '    <label class="label label-blue-6">' + "\n" +
            '            <span class="label-text">Input Label (Color on Focus)</span>' + "\n" +
            '            <input class="input input-blue-6-f" value="My colored input when focused"/>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        labels_float: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '        <label class="label text-blue-6 label-float label-active">' + "\n" +
            '            <span class="label-text">Input Label</span>' + "\n" +
            '            <input class="input input-blue-6" value="My colored input"/>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 md-col-6">' + "\n" +
            '        <label class="label label-blue-6 label-float label-active">' + "\n" +
            '            <span class="label-text">Input Label (Color on Focus)</span>' + "\n" +
            '            <input class="input input-blue-6-f" value="My colored input when focused"/>' + "\n" +
            '        </label>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        autogrow: (
            '<input class="input input-autogrow" value="My input autogrow" size="17"/>' + "\n" +
            '<br/>' + "\n" +
            '<textarea class="input input-autogrow">My textarea autogrow</textarea>' + "\n" +
            ''
        )
    };
});