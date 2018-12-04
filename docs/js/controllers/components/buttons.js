angular.module('docs').controller('components.buttonsCtrl', function ($scope) {
    $scope.$parent.title = 'Buttons';

    $scope.codes = {
        basic: (
            '<button class="btn bg-blue-5" type="button">' + "\n" +
            '   Button' + "\n" +
            '</button> ' + "\n" +
            '<button class="btn btn-raised bg-blue-5" type="button">' + "\n" +
            '   Raised Button' + "\n" +
            '</button> ' + "\n" +
            '<button class="btn text-blue-5 border-blue-5 set-border bg-blue-0-h" type="button">' + "\n" +
            '   Outlined Button' + "\n" +
            '</button> ' + "\n" +
            '<button class="btn btn-text text-blue-5 bg-blue-0-h" type="button">' + "\n" +
            '   Text Button' + "\n" +
            '</button>' +
            ''
        ),
        colors: (
            '<button class="btn bg-grey-2" type="button">' + "\n" +
            '    Grey' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-red-6" type="button">' + "\n" +
            '    Red' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-green-6" type="button">' + "\n" +
            '    Green' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5" type="button">' + "\n" +
            '    Blue' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-red-0-h text-red-6" type="button">' + "\n" +
            '    Red' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-green-0-h text-green-6" type="button">' + "\n" +
            '    Green' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-0-h text-blue-5" type="button">' + "\n" +
            '    Blue' + "\n" +
            '</button>'
        ),
        icons_circle: (
            '<button class="btn bg-grey-2 btn-icon" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-red-6 btn-icon" type="button">' + "\n" +
            '    <i class="md-icon">remove</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-green-6 btn-icon btn-circle" type="button">' + "\n" +
            '    <i class="md-icon">play_arrow</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-icon btn-circle" type="button">' + "\n" +
            '    <i class="md-icon">stop</i>' + "\n" +
            '</button>'
        ),
        group: (
            '<div class="btn-group">' + "\n" +
            '    <button class="btn btn-icon bg-blue-5 waves" type="button">' + "\n" +
            '        <i class="md-icon">format_align_left</i>' + "\n" +
            '    </button>' + "\n" +
            '    <button class="btn btn-icon bg-blue-5 waves" type="button">' + "\n" +
            '        <i class="md-icon">format_align_center</i>' + "\n" +
            '    </button>' + "\n" +
            '    <button class="btn btn-icon bg-blue-5 waves" type="button">' + "\n" +
            '        <i class="md-icon">format_align_justify</i>' + "\n" +
            '    </button>' + "\n" +
            '    <button class="btn btn-icon bg-blue-5 waves" type="button">' + "\n" +
            '        <i class="md-icon">format_align_right</i>' + "\n" +
            '    </button>' + "\n" +
            '</div>' + "\n" +
            ''),
        elevation: (
            '<button class="btn bg-blue-5 btn-raised raised-xs" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-raised raised-sm" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-raised raised-md" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-raised raised-lg" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-raised raised-xl" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>'
        ),
        sizes: (
            '<button class="btn bg-blue-5 btn-xs" type="button">' + "\n" +
            '    Button xs' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-sm" type="button">' + "\n" +
            '    Button sm' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-lg" type="button">' + "\n" +
            '    Button lg' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-xl" type="button">' + "\n" +
            '    Button xl' + "\n" +
            '</button>' + "\n" +
            '<br/>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-5 btn-xs" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-5 btn-sm" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-5" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-5 btn-lg" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-5 btn-xl" type="button">' + "\n" +
            '    <i class="md-icon">add</i>' + "\n" +
            '</button>'
        ),
        block: (
            '<button class="btn bg-blue-5 btn-block" type="button">' + "\n" +
            '    Button block' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-5 btn-xl btn-block" type="button">' + "\n" +
            '    Button lg block' + "\n" +
            '</button>'
        )
    }
});