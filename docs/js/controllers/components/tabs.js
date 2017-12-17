angular.module('docs').controller('components.tabsCtrl', function ($scope) {
    $scope.$parent.title = 'Tabs';

    $scope.events = {
        'cem.tabs.beforeShow': 'Tab content is called to show, but not shown yet',
        'cem.tabs.show': 'Tab content is shown',
        'cem.tabs.beforeHide': 'Tab content hide action is triggered, but not hidden yet',
        'cem.tabs.hide': 'Tab content is hidden'
    };

    $scope.options = [
        {
            name: 'swipe',
            default: 'true',
            values: 'true/false',
            description: 'Users can swipe the tab content to switch between tabs'
        }
    ];

    $scope.codes = {
        basic: (
            '<div class="tabs">' + "\n" +
            '    <div class="tabs-nav">' + "\n" +
            '        <a class="tab-active" data-toggle="tab">' + "\n" +
            '            Tab 1' + "\n" +
            '        </a>' + "\n" +
            '        <a data-toggle="tab">' + "\n" +
            '            Tab 2' + "\n" +
            '        </a>' + "\n" +
            '        <a data-toggle="tab">' + "\n" +
            '            Tab 3' + "\n" +
            '        </a>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="tabs-list">' + "\n" +
            '        <div class="tab-content tab-visible">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="tab-content">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="tab-content">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        ),
        colors: (
            '<div class="tabs">' + "\n" +
            '    <div class="tabs-nav border-blue-6 text-blue-6">' + "\n" +
            '        <a class="tab-active" data-toggle="tab">' + "\n" +
            '            Tab 1' + "\n" +
            '        </a>' + "\n" +
            '        <a data-toggle="tab">' + "\n" +
            '            Tab 2' + "\n" +
            '        </a>' + "\n" +
            '        <a data-toggle="tab">' + "\n" +
            '            Tab 3' + "\n" +
            '        </a>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="tabs-list">' + "\n" +
            '        <div class="tab-content tab-visible">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="tab-content">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="tab-content">' + "\n" +
            '            <div class="pd-md">' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur dolore doloribus explicabo facere, iure libero nobis nostrum perferendis porro possimus qui sed unde vel, velit vitae voluptatem voluptatibus.</p>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>' + "\n" +
            ''
        )
    };
});