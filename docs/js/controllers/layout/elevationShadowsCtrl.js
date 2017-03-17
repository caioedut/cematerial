angular.module('docs').controller('layout.elevationShadowsCtrl', function ($scope) {
    $scope.$parent.title = 'Elevation & shadows';

    $scope.codes = {
        basic: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-xs">xs</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-sm">sm</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-md">md</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-lg">lg</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-xl">xl</div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        buttons: (
            '<button class="btn btn-flat bg-blue-6 raised-md" type="button">' + "\n" +
            '    Raised Button' + "\n" +
            '</button>'
        ),
        hover: (
            '<div class="grid grid-gutter">' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-xs raised-hover">xs</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-sm raised-hover">sm</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-md raised-hover">md</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-lg raised-hover">lg</div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col">' + "\n" +
            '        <div class="pd-md raised-xl raised-hover">xl</div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});