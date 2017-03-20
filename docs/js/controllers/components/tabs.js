angular.module('docs').controller('components.tabsCtrl', function ($scope) {
    $scope.$parent.title = 'Tabs';

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
    }
});