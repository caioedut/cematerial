angular.module('docs').controller('components.modalsCtrl', function ($scope) {
    $scope.$parent.title = 'Page Modal';

    $scope.events = {
        'cem.modal.beforeShow': 'Modal is called, but not opened yet',
        'cem.modal.show': 'Modal is opened',
        'cem.modal.beforeHide': 'Modal close action is triggered, but not closed yet',
        'cem.modal.hide': 'Modal is closed'
    };

    $scope.codes = {
        basic: (
            '<button class="btn bg-blue-6" type="button" data-toggle="modal" data-target="#modal1">' + "\n" +
            '    Open Modal' + "\n" +
            '</button>' + "\n" +
            '<div id="modal1" class="modal">' + "\n" +
            '    <div class="modal-header bg-blue-6 toolbar">' + "\n" +
            '        <button class="btn btn-icon btn-circle bg-blue-6" data-toggle="modal">' + "\n" +
            '            <i class="md-icon">arrow_back</i>' + "\n" +
            '        </button>' + "\n" +
            '        <h1 class="layout-title mg-left-md">' + "\n" +
            '            My Modal' + "\n" +
            '        </h1>' + "\n" +
            '        <button class="btn bg-blue-6 col-right" data-toggle="modal">' + "\n" +
            '            Save' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="modal-body pd-md">' + "\n" +
            '        Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + "\n" +
            '    </div>' + "\n" +
            '    <div class="modal-footer">' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="modal">' + "\n" +
            '            Confirm' + "\n" +
            '        </button>' + "\n" +
            '        <button class="btn btn-flat text-blue-6" type="button" data-toggle="modal">' + "\n" +
            '            Cancel' + "\n" +
            '        </button>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        )
    };
});