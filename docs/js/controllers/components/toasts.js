angular.module('docs').controller('components.toastsCtrl', function ($scope) {
    $scope.$parent.title = 'Toasts';

    $scope.codes = {
        basic: (
            '<button class="btn bg-blue-6" data-toggle="toast" data-toast="This is my toast example">' + "\n" +
            '    Show Toast' + "\n" +
            '</button>' + "\n" +
            ''
        ),
        actions: (
            '<script type="text/javascript">' + "\n" +
            '    function showToast() {' + "\n" +
            '        var toast = new Toast("This is my advanced toast", {' + "\n" +
            '            actions: [' + "\n" +
            '                {' + "\n" +
            '                    label: "Undo",' + "\n" +
            '                    color: "blue-6", // Button color' + "\n" +
            '                    onClick: function (toast, event) {' + "\n" +
            '                        alert("Undo Clicked!");' + "\n" +
            '                        toast.hide();' + "\n" +
            '                    }' + "\n" +
            '                }' + "\n" +
            '            ]' + "\n" +
            '        });' + "\n" +
            '        toast.show();' + "\n" +
            '    }' + "\n" +
            '</script>' + "\n" +
            '<button class="btn bg-blue-6" onclick="showToast()">' + "\n" +
            '    Show Toast' + "\n" +
            '</button>' + "\n" +
            ''
        )
    };
});