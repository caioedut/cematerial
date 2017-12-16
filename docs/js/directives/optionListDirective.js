angular.module('docs').directive('optionList', function () {
    return {
        templateUrl: 'view/option-list-directive.html',
        replace: true,
        restricet: 'E'
    };
});