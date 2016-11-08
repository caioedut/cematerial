angular.module('docs').controller('layout.overviewCtrl', function ($scope) {
    $scope.$parent.title = 'Overview';

    $scope.codes = {
        basic: (
            '<div class="layout" style="border: 1px solid #ddd; height: 200px;">' + "\n" +
            '    <div class="layout-sidebar">' + "\n" +
            '        Sidebar' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header">' + "\n" +
            '        Header' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-container">' + "\n" +
            '        Container' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer">' + "\n" +
            '        Footer' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        containers: (
            '<div class="set-border">Div without .container-*</div>' + "\n" +
            '<div class="set-border container-xs">Div with .container-xs</div>' + "\n" +
            '<div class="set-border container-sm">Div with .container-sm</div>' + "\n" +
            '<div class="set-border container-md">Div with .container-md</div>' + "\n" +
            '<div class="set-border container-lg">Div with .container-lg</div>' + "\n" +
            '<div class="set-border container-xl">Div with .container-xl</div>'
        ),
        style: (
            '<div class="layout" style="border: 1px solid #ddd; height: 300px;">' + "\n" +
            '    <div class="layout-sidebar">' + "\n" +
            '        <div class="container-md">' + "\n" +
            '            Sidebar' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header bg-blue-6">' + "\n" +
            '        <div class="grid grid-middle grid-nowrap">' + "\n" +
            '            <div class="grid-col">' + "\n" +
            '                <button class="btn btn-icon btn-circle btn-xl bg-blue-6" data-toggle="sidebar">' + "\n" +
            '                    <i class="md-icon">menu</i>' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="grid-col container-md">' + "\n" +
            '                <h1 class="layout-title">' + "\n" +
            '                    Header' + "\n" +
            '                </h1>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-content">' + "\n" +
            '        <div class="container-md">' + "\n" +
            '            <p>This is my <b>scrollable</b> container.</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer bg-blue-6">' + "\n" +
            '        <div class="container-md">' + "\n" +
            '            Footer' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        sidebar: (
        '<div class="layout" style="border: 1px solid #ddd; height: 400px;">' + "\n" +
        '    <div class="layout-sidebar">' + "\n" +
        '        <div class="layout-account">' + "\n" +
        '            <img class="media-background" src="http://www.slidesjs.com/img/example-slide-350-1.jpg" alt=""/>' + "\n" +
        '            <div class="set-overlay container">' + "\n" +
        '                <div class="grid grid-gutter">' + "\n" +
        '                    <div class="xs-col-5 sm-col-4">' + "\n" +
        '                        <div class="media-container-lg">' + "\n" +
        '                            <img class="media-fluid media-cover set-circle" src="http://www.gbchealth.org/wp-content/uploads/2016/03/user-profile-placeholder.png" alt=""/>' + "\n" +
        '                        </div>' + "\n" +
        '                    </div>' + "\n" +
        '                    <a class="xs-col-12 text-white" data-toggle="nav" data-target="#nav-account">' + "\n" +
        '                        <div class="grid grid-middle">' + "\n" +
        '                            <div class="grid-col">' + "\n" +
        '                                <b>William Ward</b>' + "\n" +
        '                                <br/>' + "\n" +
        '                                william@ward.com' + "\n" +
        '                            </div>' + "\n" +
        '                            <div class="grid-col col-right">' + "\n" +
        '                                <i class="md-icon">arrow_drop_down</i>' + "\n" +
        '                            </div>' + "\n" +
        '                        </div>' + "\n" +
        '                    </a>' + "\n" +
        '                </div>' + "\n" +
        '            </div>' + "\n" +
        '        </div>' + "\n" +
        '        <ul class="layout-nav">' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">home</i>' + "\n" +
        '                Home' + "\n" +
        '            </a>' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">library_music</i>' + "\n" +
        '                Music library' + "\n" +
        '            </a>' + "\n" +
        '            <div class="divider-horizontal container-sm"></div>' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">settings</i>' + "\n" +
        '                Settings' + "\n" +
        '            </a>' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">help</i>' + "\n" +
        '                Help & feedback' + "\n" +
        '            </a>' + "\n" +
        '        </ul>' + "\n" +
        '        <ul id="nav-account" class="layout-nav nav-hidden">' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">account_circle</i>' + "\n" +
        '                Profile' + "\n" +
        '            </a>' + "\n" +
        '            <div class="divider-horizontal container-sm"></div>' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">add</i>' + "\n" +
        '                Add account' + "\n" +
        '            </a>' + "\n" +
        '            <a>' + "\n" +
        '                <i class="md-icon">settings</i>' + "\n" +
        '                Manage accounts' + "\n" +
        '            </a>' + "\n" +
        '        </ul>' + "\n" +
        '    </div>' + "\n" +
        '    <div class="layout-header bg-blue-6">' + "\n" +
        '        <div class="grid grid-middle grid-nowrap">' + "\n" +
        '            <div class="grid-col">' + "\n" +
        '                <button class="btn btn-icon btn-circle btn-xl bg-blue-6" data-toggle="sidebar">' + "\n" +
        '                    <i class="md-icon">menu</i>' + "\n" +
        '                </button>' + "\n" +
        '            </div>' + "\n" +
        '            <div class="grid-col container-md">' + "\n" +
        '                <h1 class="layout-title">' + "\n" +
        '                    Header' + "\n" +
        '                </h1>' + "\n" +
        '            </div>' + "\n" +
        '        </div>' + "\n" +
        '    </div>' + "\n" +
        '    <div class="layout-content">' + "\n" +
        '        <div class="container-md">' + "\n" +
        '            <p>This is my <b>scrollable</b> container.</p>' + "\n" +
        '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
        '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
        '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
        '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
        '        </div>' + "\n" +
        '    </div>' + "\n" +
        '    <div class="layout-footer bg-blue-6">' + "\n" +
        '        <div class="container-md">' + "\n" +
        '            Footer' + "\n" +
        '        </div>' + "\n" +
        '    </div>' + "\n" +
        '</div>'
        )
    }
});