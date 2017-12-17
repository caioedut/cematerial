angular.module('docs').controller('components.dropdownCtrl', function ($scope) {
    $scope.$parent.title = 'Dropdown';

    $scope.events = {
        'cem.dialog.beforeShow': 'Dropdown content is called to open, but not opened yet',
        'cem.dialog.show': 'Dropdown content is opened',
        'cem.dialog.beforeHide': 'Dropdown content close action is triggered, but not closed yet',
        'cem.dialog.hide': 'Dropdown content is closed'
    };

    $scope.options = [
        {
            name: 'autoclose',
            default: 'true',
            values: 'true/false',
            description: 'Close the dialog if an user clicks outside'
        }
    ];

    $scope.codes = {
        basic: (
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop me' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        sizes: (
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop me' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-xs">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop me' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop me' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-lg">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop me' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-xl">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        position_in: (
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .top' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm top">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .bottom' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm bottom">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .left' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm left">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .right' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm right">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        position_out: (
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .top-inverse' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm top-inverse">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .bottom-inverse' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm bottom-inverse">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .left-inverse' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm left-inverse">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            '<div class="dropdown"> <!-- Init dropdown -->' + "\n" +
            '    <a class="btn bg-blue-6" data-toggle="dropdown">' + "\n" +
            '        Drop .right-inverse' + "\n" +
            '    </a>' + "\n" +
            '    <div class="dropdown-body dropdown-sm right-inverse">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex magnam magni nihil obcaecati quisquam quod ratione rerum sit veritatis. Alias consequatur dicta eaque eos et excepturi expedita itaque officiis.' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        )
    };
});