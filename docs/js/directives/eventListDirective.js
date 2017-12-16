angular.module('docs').directive('eventList', function () {
    return {
        templateUrl: 'view/event-list-directive.html',
        replace: true,
        restricet: 'E'
    };
});