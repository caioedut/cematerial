angular.module('docs').controller('layoutCtrl', function ($scope) {

    $scope.title = 'Docs';
    $scope.color = 'blue';

    $scope.navs = [
        {
            title: 'Getting Started',
            url: 'getting-start',
            links: [
                {
                    title: 'Introduction',
                    url: 'introduction'
                }
            ]
        },
        {
            title: 'Layout',
            url: 'layout',
            links: [
                {
                    title: 'Overview',
                    url: 'overview'
                },
                {
                    title: 'Color Pallete',
                    url: 'color-pallete'
                }
            ]
        },
        {
            title: 'Components',
            url: 'components',
            links: [
                {
                    title: 'Buttons',
                    url: 'buttons'
                },
                {
                    title: 'Cards',
                    url: 'cards'
                },
                {
                    title: 'Chips',
                    url: 'chips'
                },
                {
                    title: 'Dropdown',
                    url: 'dropdown'
                }
            ]
        }
    ];
});