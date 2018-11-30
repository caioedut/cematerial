angular.module('docs').controller('layout.typographyCtrl', function ($scope) {
    $scope.$parent.title = 'Typography';

    $scope.codes = {
        headings: (
            '<div class="grid grid-middle grid-gutter">' + "\n" +
            '    <h1>H1</h1>' + "\n" +
            '    <h2>H2</h2>' + "\n" +
            '    <h3>H3</h3>' + "\n" +
            '    <h4>H4</h4>' + "\n" +
            '    <h5>H5</h5>' + "\n" +
            '    <h6>H6</h6>' + "\n" +
            '    <div class="subtitle">' + "\n" +
            '        Subtitle 1' + "\n" +
            '    </div>' + "\n" +
            '    <div class="subtitle-2">' + "\n" +
            '        Subtitle 2' + "\n" +
            '    </div>' + "\n" +
            '    <div class="body">' + "\n" +
            '        Body 1' + "\n" +
            '    </div>' + "\n" +
            '    <div class="body-2">' + "\n" +
            '        Body 2' + "\n" +
            '    </div>' + "\n" +
            '    <div class="button">' + "\n" +
            '        Button' + "\n" +
            '    </div>' + "\n" +
            '    <div class="caption">' + "\n" +
            '        Caption' + "\n" +
            '    </div>' + "\n" +
            '    <div class="overline">' + "\n" +
            '        Overline' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});