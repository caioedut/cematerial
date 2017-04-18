angular.module('docs').controller('layout.gridCtrl', function ($scope) {
    $scope.$parent.title = 'Grid';

    $scope.codes = {
        basic: (
            '<div class="grid bg-grey-1 set-border">' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        .grid-col<br/>' + "\n" +
            '        All columns were auto sized' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        .grid-col<br/>' + "\n" +
            '        This is a larger column. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        .grid-col<br/>' + "\n" +
            '        smaller' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        autofill: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6 col-fill">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            This is a larger column. And this have the classe <code>.col-fill</code>. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            smaller' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        gutters: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            This is a larger column. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            .grid-col<br/>' + "\n" +
            '            smaller' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        sizes: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6 xs-col-12 sm-col-6 md-col-4 lg-col-2 xl-col-1">' + "\n" +
            '            .xs-col-12 <br/>' + "\n" +
            '            .sm-col-6 <br/>' + "\n" +
            '            .md-col-4 <br/>' + "\n" +
            '            .lg-col-2 <br/>' + "\n" +
            '            .xl-col-1' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6 xs-col-8 sm-col-6 md-col-6 lg-col-2 xl-col-4">' + "\n" +
            '            .xs-col-8 <br/>' + "\n" +
            '            .sm-col-6 <br/>' + "\n" +
            '            .md-col-6 <br/>' + "\n" +
            '            .lg-col-2 <br/>' + "\n" +
            '            .xl-col-4' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6 xs-col-4 sm-col-12 md-col-2 lg-col-8 xl-col-7">' + "\n" +
            '            .xs-col-4 <br/>' + "\n" +
            '            .sm-col-12 <br/>' + "\n" +
            '            .md-col-2 <br/>' + "\n" +
            '            .lg-col-8 <br/>' + "\n" +
            '            .xl-col-7' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    };
});