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
            '    <div class="layout-body">' + "\n" +
            '        Body' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer">' + "\n" +
            '        Footer' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        containers: (
            '<div class="set-border">Div without .pd-*</div>' + "\n" +
            '<div class="set-border pd-xs">Div with .pd-xs</div>' + "\n" +
            '<div class="set-border pd-sm">Div with .pd-sm</div>' + "\n" +
            '<div class="set-border pd-md">Div with .pd-md</div>' + "\n" +
            '<div class="set-border pd-lg">Div with .pd-lg</div>' + "\n" +
            '<div class="set-border pd-xl">Div with .pd-xl</div>'
        ),
        style: (
            '<div class="layout" style="border: 1px solid #ddd; height: 300px;">' + "\n" +
            '    <div class="layout-sidebar">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Sidebar' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header bg-blue-6">' + "\n" +
            '        <div class="grid grid-middle grid-nowrap">' + "\n" +
            '            <div class="grid-col layout-toggler" data-toggle="sidebar">' + "\n" +
            '                <button class="btn btn-icon btn-circle mg-left-sm bg-blue-6">' + "\n" +
            '                    <i class="md-icon md-icon-lg">menu</i>' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="grid-col pd-md">' + "\n" +
            '                <h1 class="layout-title">' + "\n" +
            '                    Header' + "\n" +
            '                </h1>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-body">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            <p>This is my <b>scrollable</b> container.</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer bg-blue-6">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Footer' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        sidebar: (
            '<div class="layout" style="border: 1px solid #ddd; height: 380px;">' + "\n" +
            '    <div class="layout-sidebar">' + "\n" +
            '        <div class="layout-account">' + "\n" +
            '            <img class="media-background" src="img/cards.jpg" alt=""/>' + "\n" +
            '            <div class="set-overlay pd-md">' + "\n" +
            '                <div class="grid grid-gutter">' + "\n" +
            '                    <div class="xs-col-5 sm-col-4">' + "\n" +
            '                        <div class="media-container-lg">' + "\n" +
                '                            <img class="media-fluid media-cover set-circle" src="img/user-profile.png" alt=""/>' + "\n" +
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
            '            <div class="divider-horizontal mg-top-sm mg-bottom-sm"></div>' + "\n" +
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
            '            <div class="divider-horizontal mg-top-sm mg-bottom-sm"></div>' + "\n" +
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
            '            <div class="grid-col layout-toggler" data-toggle="sidebar">' + "\n" +
            '                <button class="btn btn-icon btn-circle mg-left-sm bg-blue-6">' + "\n" +
            '                    <i class="md-icon md-icon-lg">menu</i>' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="grid-col pd-md">' + "\n" +
            '                <h1 class="layout-title">' + "\n" +
            '                    Header' + "\n" +
            '                </h1>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-body">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            <p>This is my <b>scrollable</b> container.</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda aut doloremque, dolores ducimus eius, et eveniet, harum ipsa ipsam maxime minus officiis perspiciatis porro praesentium quod rem totam!</p>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer bg-blue-6">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Footer' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        )
    }
});