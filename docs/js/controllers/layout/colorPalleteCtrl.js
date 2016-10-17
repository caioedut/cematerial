angular.module('docs').controller('layout.colorPalleteCtrl', function ($scope) {
    $scope.$parent.title = 'Color Pallete';

    $scope.colors = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'lightblue', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'grey', 'bluegrey'];

    $scope.codes = {
        hover_me: (
            '<button class="btn btn-flat" type="button" data-class-hover="bg-red-6">' + "\n" +
            '   Hover me' + "\n" +
            '</button>' + "\n" +
            '<button class="btn btn-flat" type="button" data-class-focus="bg-red-6">' + "\n" +
            '   Focus me' + "\n" +
            '</button>'
        )
    }
});