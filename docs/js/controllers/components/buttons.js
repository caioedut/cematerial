angular.module('docs').controller('components.buttonsCtrl', function ($scope) {
    $scope.$parent.title = 'Buttons';

    $scope.codes = {
        basic: (
            '<button class="btn" type="button">' + "\n" +
            '   Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-lower" type="button">' + "\n" +
            '   Button Lower' + "\n" +
            '</button>'
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
            '<button class="btn bg-blue-6" type="button">' + "\n" +
            '    Blue' + "\n" +
            '</button>' + "\n" +
            '<button class="btn text-red-6" type="button">' + "\n" +
            '    Red' + "\n" +
            '</button>' + "\n" +
            '<button class="btn text-green-6" type="button">' + "\n" +
            '    Green' + "\n" +
            '</button>' + "\n" +
            '<button class="btn text-blue-6" type="button">' + "\n" +
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
            '<button class="btn bg-blue-6 btn-icon btn-circle" type="button">' + "\n" +
            '    <i class="md-icon">stop</i>' + "\n" +
            '</button>'
        ),
        elevation: (
            '<button class="btn bg-blue-6 btn-raised raised-xs" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-raised raised-sm" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-raised raised-md" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-raised raised-lg" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-raised raised-xl" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>'
        ),
        sizes: (
            '<button class="btn bg-blue-6 btn-xs" type="button">' + "\n" +
            '    Button xs' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-sm" type="button">' + "\n" +
            '    Button sm' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6" type="button">' + "\n" +
            '    Button' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-lg" type="button">' + "\n" +
            '    Button lg' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-xl" type="button">' + "\n" +
            '    Button xl' + "\n" +
            '</button>' + "\n" +
            '<br/>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-6 btn-xs" type="button">' + "\n" +
            '    <i class="md-icon">message</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-6 btn-sm" type="button">' + "\n" +
            '    <i class="md-icon">message</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-6" type="button">' + "\n" +
            '    <i class="md-icon">message</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-6 btn-lg" type="button">' + "\n" +
            '    <i class="md-icon">message</i>' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-icon btn-circle bg-blue-6 btn-xl" type="button">' + "\n" +
            '    <i class="md-icon">message</i>' + "\n" +
            '</button>'
        ),
        block: (
            '<button class="btn bg-blue-6 btn-block" type="button">' + "\n" +
            '    Button block' + "\n" +
            '</button>' + "\n" +
            '<button class="btn bg-blue-6 btn-xl btn-block" type="button">' + "\n" +
            '    Button lg block' + "\n" +
            '</button>'
        )
    }
});