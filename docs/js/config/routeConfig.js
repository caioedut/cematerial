angular.module('docs').config(function ($stateProvider, navs) {

    // navs defined on app.js

    navs.forEach(function (nav) {
        nav.links.forEach(function (route) {
            $stateProvider.state({
                name: route.url,
                url: '/' + nav.url + '/' + route.url,
                controller: nav.url.toCamelCase() + '.' + route.url.toCamelCase() + 'Ctrl',
                templateUrl: 'view/' + nav.url + '/' + route.url + '.html'
            });
        })
    });

});