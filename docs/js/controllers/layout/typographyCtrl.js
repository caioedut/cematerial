angular.module('docs').controller('layout.typographyCtrl', function ($scope) {
    $scope.$parent.title = 'Typography';

    $scope.codes = {
        headings: (
            '<h1>Heading h1</h1>' + "\n" +
            '<h2>Heading h2</h2>' + "\n" +
            '<h3>Heading h3</h3>' + "\n" +
            '<h4>Heading h4</h4>' + "\n" +
            '<h5>Heading h5</h5>' + "\n" +
            '<h6>Heading h6</h6>' + "\n" +
            ''
        ),
        md: (
            '<div class="grid grid-middle grid-gutter">' + "\n" +
            '    <div class="display-4">' + "\n" +
            '        Display 4' + "\n" +
            '    </div>' + "\n" +
            '    <div class="display-3">' + "\n" +
            '        Display 3' + "\n" +
            '    </div>' + "\n" +
            '    <div class="display-2">' + "\n" +
            '        Display 2' + "\n" +
            '    </div>' + "\n" +
            '    <div class="display-1">' + "\n" +
            '        Display 1' + "\n" +
            '    </div>' + "\n" +
            '    <div class="headline">' + "\n" +
            '        Headline' + "\n" +
            '    </div>' + "\n" +
            '    <div class="title">' + "\n" +
            '        Title' + "\n" +
            '    </div>' + "\n" +
            '    <div class="subheader">' + "\n" +
            '        Subheader' + "\n" +
            '    </div>' + "\n" +
            '    <div class="body-2">' + "\n" +
            '        Body 2' + "\n" +
            '    </div>' + "\n" +
            '    <div class="body-1">' + "\n" +
            '        Body 1' + "\n" +
            '    </div>' + "\n" +
            '    <div class="caption">' + "\n" +
            '        Caption' + "\n" +
            '    </div>' + "\n" +
            '    <div class="button">' + "\n" +
            '        Button' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});