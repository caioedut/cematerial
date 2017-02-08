// angular.module('docs', ['ngRoute']);
angular.module('docs', [
    'ngSanitize',
    'ui.router'
]);

String.prototype.toCamelCase = function () {
    return this.replace(/-/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

angular.module('docs').constant('navs', [
    {
        url: 'getting-started',
        title: 'Getting Started',
        links: [
            {
                url: 'introduction',
                title: 'Introduction'
            }
        ]
    },
    {
        url: 'layout',
        title: 'Layout',
        links: [
            {
                url: 'overview',
                title: 'Overview'
            },
            {
                url: 'color-pallete',
                title: 'Color Pallete'
            }
        ]
    },
    {
        url: 'components',
        title: 'Components',
        links: [
            {
                url: 'buttons',
                title: 'Buttons'
            },
            {
                url: 'cards',
                title: 'Cards'
            },
            {
                url: 'chips',
                title: 'Chips'
            },
            {
                url: 'datepicker',
                title: 'Datepicker'
            },
            {
                url: 'dialogs',
                title: 'Dialogs'
            },
            {
                url: 'dropdown',
                title: 'Dropdown'
            },
            {
                url: 'menus',
                title: 'Menus'
            }
        ]
    }
]);