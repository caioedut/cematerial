angular.module('docs').controller('components.selectionCtrl', function ($scope) {
    $scope.$parent.title = 'Selection Controls';

    $scope.codes = {
        radio: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input" type="radio"/>' + "\n" +
            '        My Radio' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-red-6 text-red-6" type="radio"/>' + "\n" +
            '        My Radio' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-green-6 text-green-6" type="radio"/>' + "\n" +
            '        My Radio' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-blue-6 text-blue-6" type="radio"/>' + "\n" +
            '        My Radio' + "\n" +
            '    </label>' + "\n" +
            '</div>'
        ),
        checkbox: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input" type="checkbox"/>' + "\n" +
            '        My Checkbox' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-red-6 text-red-6" type="checkbox"/>' + "\n" +
            '        My Checkbox' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-green-6 text-green-6" type="checkbox"/>' + "\n" +
            '        My Checkbox' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-blue-6 text-blue-6" type="checkbox"/>' + "\n" +
            '        My Checkbox' + "\n" +
            '    </label>' + "\n" +
            '</div>'
        ),
        switch: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-switch" type="checkbox"/>' + "\n" +
            '        My Switch' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-switch input-red-6 text-red-6" type="checkbox"/>' + "\n" +
            '        My Switch' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-switch input-green-6 text-green-6" type="checkbox"/>' + "\n" +
            '        My Switch' + "\n" +
            '    </label>' + "\n" +
            '    <label class="grid-col">' + "\n" +
            '        <input class="input input-switch input-blue-6 text-blue-6" type="checkbox"/>' + "\n" +
            '        My Switch' + "\n" +
            '    </label>' + "\n" +
            '</div>'
        )
    }
});