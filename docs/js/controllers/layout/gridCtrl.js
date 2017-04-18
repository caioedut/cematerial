angular.module('docs').controller('layout.gridCtrl', function ($scope) {
    $scope.$parent.title = 'Grid';

    $scope.codes = {
        basic: (
            '<div class="grid bg-grey-1 set-border">' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        <code>.grid-col</code><br/>' + "\n" +
            '        All columns were auto sized' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        <code>.grid-col</code><br/>' + "\n" +
            '        This is a larger column. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col set-border border-blue-6">' + "\n" +
            '        <code>.grid-col</code><br/>' + "\n" +
            '        Smaller column' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        autofill: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6 col-fill">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column. And this have the classe <code>.col-fill</code>. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        gutters: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
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
        ),
        justify_between: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-justify bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column. Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        justify_around: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-justify-around bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column. Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_top: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-top bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_bottom: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-bottom bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_middle: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-middle bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_left: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-left bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_right: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-right bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        content_align_center: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter grid-center bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code><br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        column_align_horizontal: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col col-left set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-left</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col col-center set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-center</code>' + "\n" +
            '            <br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col col-right set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-right</code>' + "\n" +
            '            <br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        column_align_vertical: (
            '<div class="pd-md">' + "\n" +
            '    <div class="grid grid-gutter bg-grey-1 set-border">' + "\n" +
            '        <div class="grid-col col-top set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-top</code>' + "\n" +
            '            <br/>' + "\n" +
            '            All columns were auto sized' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col col-middle set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-middle</code>' + "\n" +
            '            <br/>' + "\n" +
            '            This is a larger column.' + "\n" +
            '            <br/>' + "\n" +
            '            Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col col-bottom set-border border-blue-6">' + "\n" +
            '            <code>.grid-col</code>' + "\n" +
            '            <code>.col-bottom</code>' + "\n" +
            '            <br/>' + "\n" +
            '            Smaller column' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    };
});