angular.module('docs').controller('layout.colorPalleteCtrl', function ($scope) {
    $scope.$parent.title = 'Color Pallete';

    $scope.colors = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'lightblue', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'grey', 'bluegrey'];
});