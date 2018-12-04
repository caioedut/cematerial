angular.module('docs').controller('layout.wavesCtrl', function ($scope) {
    $scope.$parent.title = 'Waves';

    $scope.codes = {
        basic: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md bg-blue-5 waves">White Wave</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md bg-blue-5 waves waves-dark">Dark Wave</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md bg-blue-5 waves waves-overflow">Wave Fited</div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        button: (
            '<button class="btn bg-blue-5 waves">' +
            '    Button' +
            '</button>' + "\n" +
            '<button class="btn btn-raised bg-blue-5 waves">' +
            '    Raised Button' +
            ''
        )
    }
});