angular.module('docs').controller('components.dialogsCtrl', function ($scope) {
    $scope.$parent.title = 'Dialogs';

    $scope.events = {
        'cem.dialog.beforeShow': 'Dialog is called, but not opened yet',
        'cem.dialog.show': 'Dialog is opened',
        'cem.dialog.beforeHide': 'Dialog close action is triggered, but not closed yet',
        'cem.dialog.hide': 'Dialog is closed'
    };

    $scope.options = [
        {
            name: 'autoclose',
            default: 'true',
            values: 'true/false',
            description: 'Close the dialog if an user clicks on backdrop'
        },
        {
            name: 'keyboard',
            default: 'true',
            values: 'true/false',
            description: 'Close the dialog if an user press ESC key'
        }
    ];

    $scope.codes = {
        basic: (
            '<button class="btn bg-blue-6" type="button" data-toggle="dialog" data-target="#dialog1">' + "\n" +
            '    Open Dialog' + "\n" +
            '</button>' + "\n" +
            '<div id="dialog1" class="dialog">' + "\n" +
            '    <div class="dialog-header">' + "\n" +
            '        <h3 class="dialog-title">My Dialog</h3>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-body">' + "\n" +
            '        Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-footer">' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '            Confirm' + "\n" +
            '        </button>' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="dialog">' + "\n" +
            '            Cancel' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        sizes: (
            '<button class="btn bg-blue-6" type="button" data-toggle="dialog" data-target="#dialog2">' + "\n" +
            '    Open Dialog' + "\n" +
            '</button>' + "\n" +
            '<div id="dialog2" class="dialog xs-col-10 sm-col-8 md-col-6">' + "\n" +
            '    <div class="dialog-header">' + "\n" +
            '        <h3 class="dialog-title">My Dialog</h3>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-body">' + "\n" +
            '        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, delectus deserunt earum error fugit iusto qui sit ut veniam. Alias at cupiditate enim est et iste necessitatibus neque ut.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-footer">' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '            Confirm' + "\n" +
            '        </button>' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="dialog">' + "\n" +
            '            Cancel' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        multiple: (
            '<button class="btn bg-blue-6" type="button" data-toggle="dialog" data-target="#dialog3">' + "\n" +
            '    Open Dialog' + "\n" +
            '</button>' + "\n" +
            '<div id="dialog3" class="dialog">' + "\n" +
            '    <div class="dialog-header">' + "\n" +
            '        <h3 class="dialog-title">My Dialog</h3>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-body">' + "\n" +
            '        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' + "\n" +
            '        <p>Aliquam aspernatur, delectus deserunt earum error fugit iusto qui sit ut veniam.</p>' + "\n" +
            '        <p>Alias at cupiditate enim est et iste necessitatibus neque ut.</p>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-footer">' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="dialog" data-target="#dialog4">' + "\n" +
            '            Open Dialog Over' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div id="dialog4" class="dialog">' + "\n" +
            '    <div class="dialog-header">' + "\n" +
            '        <h1 class="dialog-title">Alert</h1>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-body">' + "\n" +
            '        Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="dialog-footer">' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="dialog">' + "\n" +
            '            Close' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        )
    };
});