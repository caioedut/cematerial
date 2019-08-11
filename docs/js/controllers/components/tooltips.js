angular.module('docs').controller('components.tooltipsCtrl', function ($scope) {
    $scope.$parent.title = 'Tooltips';

    $scope.events = {
        'cem.tooltip.beforeShow': 'Tooltip is called to show, but not shown yet',
        'cem.tooltip.show': 'Tooltip is shown',
        'cem.tooltip.beforeHide': 'Tooltip hide action is triggered, but not hidden yet',
        'cem.tooltip.hide': 'Tooltip is hidden'
    };

    $scope.options = [
        {
            name: 'html',
            default: 'false',
            values: 'true/false',
            description: 'Defines if the content it is a html'
        },
        {
            name: 'wrap',
            default: 'false',
            values: 'true/false',
            description: 'Defines if the content can break lines'
        }
    ];

    $scope.codes = {
        basic: (
            '<button class="btn btn-raised bg-blue-6" data-tooltip="Hello world! I\'m the tooltip. Thank you!">' + "\n" +
            '    Hover/Focus Me' + "\n" +
            '</button>' + "\n" +
            ''
        )
    }
});