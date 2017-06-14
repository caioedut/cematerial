angular.module('docs').controller('components.menusCtrl', function ($scope) {
    $scope.$parent.title = 'Menus';

    $scope.codes = {
        basic: (
            '<div class="pd-md bg-grey-2">' + "\n" +
            '   <ul class="menu">' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">visibility</i>' + "\n" +
            '               Preview' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">person_add</i>' + "\n" +
            '               Share' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">link</i>' + "\n" +
            '               Get Link' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '       <li class="divider-horizontal"></li>' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">content_copy</i>' + "\n" +
            '               Make a copy' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">get_app</i>' + "\n" +
            '               Download' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '       <li class="divider-horizontal"></li>' + "\n" +
            '       <li>' + "\n" +
            '           <a>' + "\n" +
            '               <i class="md-icon">delete</i>' + "\n" +
            '               Remove' + "\n" +
            '           </a>' + "\n" +
            '       </li>' + "\n" +
            '   </ul>' + "\n" +
            '</div>'
        ),
        block: (
            '<div class="pd-md bg-grey-2">' + "\n" +
            '    <ul class="menu set-block">' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '</div>'
        ),
        colors: (
            '<div class="pd-md bg-grey-2">' + "\n" +
            '    <ul class="menu">' + "\n" +
            '        <li>' + "\n" +
            '            <a class="text-blue-6 bg-blue-6-h">' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a class="text-red-6 bg-red-6-h">' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a class="text-green-6 bg-green-6-h">' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '    <ul class="menu bg-blue-6">' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '</div>'
        ),
        dropdown: (
            '<div class="dropdown">' + "\n" +
            '    <button class="btn btn-icon btn-circle bg-blue-6" type="button" data-toggle="dropdown">' + "\n" +
            '        <i class="md-icon">menu</i>' + "\n" +
            '    </button>' + "\n" +
            '    <ul class="dropdown-body top left menu">' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li class="dropdown">' + "\n" +
            '            <a data-toggle="dropdown">' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '            <ul class="dropdown-body top left-inverse menu">' + "\n" +
            '                <li>' + "\n" +
            '                    <a>Text message</a>' + "\n" +
            '                </li>' + "\n" +
            '                <li>' + "\n" +
            '                    <a>E-mail</a>' + "\n" +
            '                </li>' + "\n" +
            '            </ul>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a>' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '</div>'
        ),
        context_menu: (
            '<div class="set-border set-round bg-grey-2 pd-sm pd-left-md pd-right-md" data-toggle="contextmenu">' + "\n" +
            '    <div class="grid grid-middle grid-nowrap">' + "\n" +
            '        <div class="grid-col">' + "\n" +
            '            This is a menu button with context menu (click on button or right click in this block)' + "\n" +
            '        </div>' + "\n" +
            '        <div class="grid-col col-right">' + "\n" +
            '            <div class="dropdown">' + "\n" +
            '                <button class="btn btn-icon btn-circle" type="button" data-toggle="dropdown">' + "\n" +
            '                    <i class="md-icon">more_vert</i>' + "\n" +
            '                </button>' + "\n" +
            '                <ul class="dropdown-body right top menu">' + "\n" +
            '                    <li>' + "\n" +
            '                        <a class="bg-blue-1-h">Action One</a>' + "\n" +
            '                    </li>' + "\n" +
            '                    <li>' + "\n" +
            '                        <a class="bg-blue-1-h">Action Two</a>' + "\n" +
            '                    </li>' + "\n" +
            '                    <li>' + "\n" +
            '                        <a class="bg-blue-1-h">Action Three</a>' + "\n" +
            '                    </li>' + "\n" +
            '                </ul>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});