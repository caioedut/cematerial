angular.module('docs').config(function ($stateProvider) {

    var routes = [
        /**
         * Getting Started
         */
        {
            name: 'introduction',
            url: '/getting-started/introduction',
            controller: 'gettingStarted.introductionCtrl',
            templateUrl: 'view/getting-started/introduction.html'
        },

        /**
         * Layout
         */
        {
            name: 'colorPallete',
            url: '/layout/color-pallete',
            controller: 'layout.colorPalleteCtrl',
            templateUrl: 'view/layout/color-pallete.html'
        },

        /**
         * Components
         */
        {
            name: 'buttons',
            url: '/components/buttons',
            controller: 'components.buttonsCtrl',
            templateUrl: 'view/components/buttons.html'
        },
        {
            name: 'cards',
            url: '/components/cards',
            controller: 'components.cardsCtrl',
            templateUrl: 'view/components/cards.html'
        },
        {
            name: 'chips',
            url: '/components/chips',
            controller: 'components.chipsCtrl',
            templateUrl: 'view/components/chips.html'
        },
        {
            name: 'dialogs',
            url: '/components/dialogs',
            controller: 'components.dialogsCtrl',
            templateUrl: 'view/components/dialogs.html'
        },
        {
            name: 'dropdown',
            url: '/components/dropdown',
            controller: 'components.dropdownCtrl',
            templateUrl: 'view/components/dropdown.html'
        },
        {
            name: 'menus',
            url: '/components/menus',
            controller: 'components.menusCtrl',
            templateUrl: 'view/components/menus.html'
        }
    ];

    routes.forEach(function (route) {
        $stateProvider.state(route);
    });
});