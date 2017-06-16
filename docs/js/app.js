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
                url: 'css',
                title: 'CSS Classes'
            },
            {
                url: 'typography',
                title: 'Typography'
            },
            {
                url: 'grid',
                title: 'Grid'
            },
            {
                url: 'color-palette',
                title: 'Color Palette'
            },
            {
                url: 'elevation-shadows',
                title: 'Elevation & Shadows'
            }
        ]
    },
    {
        url: 'components',
        title: 'Components',
        links: [
            {
                url: 'accordion',
                title: 'Accordion'
            },
            {
                url: 'appbar',
                title: 'App Bar'
            },
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
                url: 'inputs',
                title: 'Inputs'
            },
            {
                url: 'menus',
                title: 'Menus'
            },
            {
                url: 'modals',
                title: 'Page Modal'
            },
            {
                url: 'selection',
                title: 'Selection Controls'
            },
            {
                url: 'tables',
                title: 'Tables'
            },
            {
                url: 'tabs',
                title: 'Tabs'
            },
            {
                url: 'toasts',
                title: 'Toasts'
            }
        ]
    }
]);

function showToast() {
    var toast = new Toast("This is my advanced toast", {
        actions: [
            {
                label: "Undo",
                color: "blue-6", // Button color
                onClick: function (toast, event) {
                    alert("Undo Clicked!");
                    toast.hide();
                }
            }
        ]
    });
    toast.show();
}