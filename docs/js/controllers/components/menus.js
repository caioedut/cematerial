angular.module('docs').controller('components.menusCtrl', function ($scope) {
    $scope.$parent.title = 'Menus';

    $scope.codes = {
        basic: (
            '<div class="container-md bg-grey-2">' + "\n" +
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
            '<div class="container-md bg-grey-2">' + "\n" +
            '    <ul class="menu menu-block">' + "\n" +
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
            '<div class="container-md bg-grey-2">' + "\n" +
            '    <ul class="menu">' + "\n" +
            '        <li>' + "\n" +
            '            <a class="text-blue-6" data-class-hover="bg-blue-6 text-white">' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a data-class-hover="bg-blue-6">' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a data-class-hover="bg-blue-6">' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '    <ul class="menu bg-blue-6">' + "\n" +
            '        <li>' + "\n" +
            '            <a data-class-hover="bg-blue-7">' + "\n" +
            '                <i class="md-icon">visibility</i>' + "\n" +
            '                Preview' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a data-class-hover="bg-blue-7">' + "\n" +
            '                <i class="md-icon">person_add</i>' + "\n" +
            '                Share' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '        <li>' + "\n" +
            '            <a data-class-hover="bg-blue-7">' + "\n" +
            '                <i class="md-icon">link</i>' + "\n" +
            '                Get Link' + "\n" +
            '            </a>' + "\n" +
            '        </li>' + "\n" +
            '    </ul>' + "\n" +
            '</div>'
        ),
        dropdown: (
            '<div class="dropdown">' + "\n" +
            '    <button class="btn btn-icon bg-blue-6" type="button" data-toggle="dropdown">' + "\n" +
            '        <i class="md-icon">menu</i>' + "\n" +
            '    </button>' + "\n" +
            '    <ul class="dropdown-body bottom left menu">' + "\n" +
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
            '            <ul class="dropdown-body bottom left-inverse menu">' + "\n" +
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
        )
    }
});