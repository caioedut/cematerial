angular.module('docs').controller('gettingStarted.introductionCtrl', function ($scope) {
    $scope.$parent.title = 'Introduction';

    $scope.codes = {
        meta_tag: (
            '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0"/>'
        ),
        dependences: (
            '<!-- JQUERY -->' + "\n" +
            '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>' + "\n" +
            "\n" +
            '<!-- FONTS -->' + "\n" +
            '<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>' + "\n" +
            '<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>'
        ),
        framework: (
            '<!-- CEMATERIAL -->' + "\n" +
            '<script type="text/javascript" src="js/cematerial.min.js"></script>' + "\n" +
            '<link type="text/css" rel="stylesheet" href="css/cematerial.min.css"/>'
        )
    }
});