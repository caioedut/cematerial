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
        style: (
            '<div class="layout" style="border: 1px solid #ddd; height: 300px;">' + "\n" +
            '    <div class="layout-sidebar">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Sidebar' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header bg-blue-6 toolbar">' + "\n" +
            '        <button class="btn btn-icon btn-circle bg-blue-6 layout-toggler" data-toggle="sidebar">' + "\n" +
            '            <i class="md-icon">menu</i>' + "\n" +
            '        </button>' + "\n" +
            '        <h1 class="layout-title mg-left-md">' + "\n" +
            '            Header' + "\n" +
            '        </h1>' + "\n" +
            '        <button class="btn btn-icon btn-circle bg-blue-6 waves col-right">' + "\n" +
            '            <i class="md-icon">search</i>' + "\n" +
            '        </button>' + "\n" +
            '        <button class="btn btn-icon btn-circle bg-blue-6 waves">' + "\n" +
            '            <i class="md-icon">more_vert</i>' + "\n" +
            '        </button>' + "\n" +
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
            '<div class="layout" style="border: 1px solid #ddd; height: 400px;">' + "\n" +
            '    <div class="layout-sidebar flex">' + "\n" +
            '        <div class="flex-header relative">' + "\n" +
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
            '                                <div class="body-2">William Ward</div>' + "\n" +
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
            '        <div class="flex-body">' + "\n" +
            '            <ul class="layout-nav">' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">home</i>' + "\n" +
            '                    Home' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">library_music</i>' + "\n" +
            '                    Music library' + "\n" +
            '                </a>' + "\n" +
            '                <div class="divider-horizontal"></div>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">settings</i>' + "\n" +
            '                    Settings' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">help</i>' + "\n" +
            '                    Help & feedback' + "\n" +
            '                </a>' + "\n" +
            '            </ul>' + "\n" +
            '            <ul id="nav-account" class="layout-nav nav-hidden">' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">account_circle</i>' + "\n" +
            '                    Profile' + "\n" +
            '                </a>' + "\n" +
            '                <div class="divider-horizontal"></div>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">add</i>' + "\n" +
            '                    Add account' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">settings</i>' + "\n" +
            '                    Manage accounts' + "\n" +
            '                </a>' + "\n" +
            '            </ul>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header bg-blue-6 toolbar">' + "\n" +
            '        <button class="btn btn-icon btn-circle bg-blue-6 layout-toggler" data-toggle="sidebar">' + "\n" +
            '            <i class="md-icon">menu</i>' + "\n" +
            '        </button>' + "\n" +
            '        <h1 class="layout-title mg-left-md">' + "\n" +
            '            Header' + "\n" +
            '        </h1>' + "\n" +
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
            '</div>' + "\n" +
            ''
        ),
        tabs: (
            '<div class="layout tabs" style="border: 1px solid #ddd; height: 400px;">' + "\n" +
            '    <div class="layout-sidebar flex">' + "\n" +
            '        <div class="flex-header relative">' + "\n" +
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
            '                                <div class="body-2">William Ward</div>' + "\n" +
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
            '        <div class="flex-body">' + "\n" +
            '            <ul class="layout-nav">' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">home</i>' + "\n" +
            '                    Home' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">library_music</i>' + "\n" +
            '                    Music library' + "\n" +
            '                </a>' + "\n" +
            '                <div class="divider-horizontal"></div>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">settings</i>' + "\n" +
            '                    Settings' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">help</i>' + "\n" +
            '                    Help & feedback' + "\n" +
            '                </a>' + "\n" +
            '            </ul>' + "\n" +
            '            <ul id="nav-account" class="layout-nav nav-hidden">' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">account_circle</i>' + "\n" +
            '                    Profile' + "\n" +
            '                </a>' + "\n" +
            '                <div class="divider-horizontal"></div>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">add</i>' + "\n" +
            '                    Add account' + "\n" +
            '                </a>' + "\n" +
            '                <a>' + "\n" +
            '                    <i class="md-icon">settings</i>' + "\n" +
            '                    Manage accounts' + "\n" +
            '                </a>' + "\n" +
            '            </ul>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-header bg-blue-6">' + "\n" +
            '        <div class="toolbar">' + "\n" +
            '            <button class="btn btn-icon btn-circle bg-blue-6 layout-toggler" data-toggle="sidebar">' + "\n" +
            '                <i class="md-icon">menu</i>' + "\n" +
            '            </button>' + "\n" +
            '            <h1 class="layout-title mg-left-md">' + "\n" +
            '                Header' + "\n" +
            '            </h1>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="tabs-nav mg-left mg-right">' + "\n" +
            '            <a class="tab-active" data-toggle="tab" data-target="#tab1">My Tab</a>' + "\n" +
            '            <a data-toggle="tab" data-target="#tab2">Tab 2</a>' + "\n" +
            '            <a data-toggle="tab" data-target="#tab3">Tab 3</a>' + "\n" +
            '            <a data-toggle="tab" data-target="#tab4">Tab 4</a>' + "\n" +
            '            <a data-toggle="tab" data-target="#tab5">Tab 5</a>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-body">' + "\n" +
            '        <div class="tabs-list">' + "\n" +
            '            <div id="tab1" class="tab-content tab-visible pd-sm">' + "\n" +
            '                <div class="pd-md bg-white raised-xs">' + "\n" +
            '                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto dolore facere facilis ipsam natus neque, nesciunt non, praesentium quam quis sed sint sunt, suscipit tenetur voluptate! Quis, reiciendis.' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '            <div id="tab2" class="tab-content pd-sm">' + "\n" +
            '                <div class="grid grid-gutter-xs grid-middle">' + "\n" +
            '                    <div class="grid-col">' + "\n" +
            '                        <div class="card">' + "\n" +
            '                            <div class="card-header">' + "\n" +
            '                                <h2 class="title">Hello</h2>' + "\n" +
            '                            </div>' + "\n" +
            '                            <div class="card-body">' + "\n" +
            '                                This is the Tab 2' + "\n" +
            '                            </div>' + "\n" +
            '                        </div>' + "\n" +
            '                    </div>' + "\n" +
            '                    <div class="grid-col">' + "\n" +
            '                        <div class="card">' + "\n" +
            '                            <div class="card-header">' + "\n" +
            '                                <h2 class="title">Hello</h2>' + "\n" +
            '                            </div>' + "\n" +
            '                            <div class="card-body">' + "\n" +
            '                                This is the Tab 2' + "\n" +
            '                            </div>' + "\n" +
            '                        </div>' + "\n" +
            '                    </div>' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '            <div id="tab3" class="tab-content pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, pro iriure maiorum ea. Ex cum solum legimus pericula, te sea harum postea inciderint. Graece intellegat scriptorem mei at. Eam modus dolor putent et, diam alterum legendos et vim. Sit reque virtute ea, possim accumsan mei ei, et congue impetus denique eos.</p>' + "\n" +
            '                <p>Ullum invidunt te usu, discere lobortis no mei. Idque ponderum mel eu, cu putant timeam audire eos. Vim nusquam invidunt eu, pri ei quaestio definiebas vituperatoribus. Id accusam definitionem mea, sapientem urbanitas mnesarchum est et. Eum homero nusquam et, cum putant oblique et.</p>' + "\n" +
            '            </div>' + "\n" +
            '            <div id="tab4" class="tab-content pd-md">' + "\n" +
            '                This is the Tab 4' + "\n" +
            '            </div>' + "\n" +
            '            <div id="tab5" class="tab-content pd-md">' + "\n" +
            '                This is the Tab 5' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="layout-footer bg-blue-6">' + "\n" +
            '        <div class="pd-md">' + "\n" +
            '            Footer' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    }
});