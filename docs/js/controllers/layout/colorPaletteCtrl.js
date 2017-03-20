angular.module('docs').controller('layout.colorPaletteCtrl', function ($scope) {
    $scope.$parent.title = 'Color Palette';

    $scope.colors = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'lightblue', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'grey', 'bluegrey'];
});