angular.module('docs').controller('components.chipsCtrl', function ($scope) {
    $scope.$parent.title = 'Chips';

    $scope.codes = {
        basic: (
            '<div class="chips">' + "\n" +
            '    Basic chips' + "\n" +
            '</div>'
        ),
        advanced: (
            '<div class="chips">' + "\n" +
            '    <img src="img/cards.jpg" alt=""/>' + "\n" +
            '    Image chips' + "\n" +
            '</div>' + "\n" +
            '<div class="chips">' + "\n" +
            '    <img src="img/cards2.jpg" alt=""/>' + "\n" +
            '    Icon chips' + "\n" +
            '    <i class="md-icon">close</i>' + "\n" +
            '</div>'
        )
    }
});