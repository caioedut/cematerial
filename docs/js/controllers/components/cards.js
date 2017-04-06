angular.module('docs').controller('components.cardsCtrl', function ($scope) {
    $scope.$parent.title = 'Cards';

    $scope.codes = {
        basic: (
            '<div class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->' + "\n" +
            '    <div class="card">' + "\n" +
            '        <img class="img-fluid" src="img/cards.jpg" alt=""/>' + "\n" +
            '        <div class="card-header">' + "\n" +
            '            <h2 class="card-title">Kangaroo Valey Saffari</h2>' + "\n" +
            '        </div>' + "\n" +
            '        <div class="card-body">' + "\n" +
            '            Located two hours south of Sydney in the Southern Highlands of New South Waves, ...' + "\n" +
            '        </div>' + "\n" +
            '        <div class="card-footer">' + "\n" +
            '            <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                Share' + "\n" +
            '            </button>' + "\n" +
            '            <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                Explore' + "\n" +
            '            </button>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        grid_cards: (
            '<div class="grid grid-gutter grid-cards"> <!-- Grid container -->' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->' + "\n" +
            '        <div class="card">' + "\n" +
            '            <img class="img-fluid" src="img/cards.jpg" alt=""/>' + "\n" +
            '            <div class="card-header">' + "\n" +
            '                <h2 class="card-title">Kangaroo Valey Saffari</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-body">' + "\n" +
            '                Located two hours south of Sydney in the Southern Highlands of New South Waves' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer">' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->' + "\n" +
            '        <div class="card">' + "\n" +
            '            <img class="img-fluid" src="img/cards2.jpg" alt=""/>' + "\n" +
            '            <div class="card-header">' + "\n" +
            '                <h2 class="card-title">New York City</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-body">' + "\n" +
            '                Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer">' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2"> <!-- Container size -->' + "\n" +
            '        <div class="card">' + "\n" +
            '            <img class="img-fluid" src="img/cards3.jpg" alt=""/>' + "\n" +
            '            <div class="card-header">' + "\n" +
            '                <h2 class="card-title">Fun at the Beach</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-body">' + "\n" +
            '                There are some signs of a calm at noon, and these became more distinct as the sun' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer">' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-blue-6" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        ),
        colors: (
            '<div class="grid grid-cards"> <!-- Grid container -->' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 pd-md"> <!-- Container size -->' + "\n" +
            '        <div class="card bg-red-6">' + "\n" +
            '            <img class="img-fluid" src="img/cards.jpg" alt=""/>' + "\n" +
            '            <div class="card-header bg-red-8">' + "\n" +
            '                <h2 class="card-title">Kangaroo Valey Saffari</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-body pd-md">' + "\n" +
            '                Located two hours south of Sydney in the Southern Highlands of New South Waves' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer">' + "\n" +
            '                <button class="btn btn-flat text-white" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-white" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 pd-md"> <!-- Container size -->' + "\n" +
            '        <div class="card bg-green-6">' + "\n" +
            '            <img class="img-fluid" src="img/cards2.jpg" alt=""/>' + "\n" +
            '            <div class="card-header">' + "\n" +
            '                <h2 class="card-title">New York City</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="divider-horizontal border-green-8"></div>' + "\n" +
            '            <div class="card-body pd-md">' + "\n" +
            '                Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer bg-white text-green-6">' + "\n" +
            '                <button class="btn btn-flat text-green-6" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-green-6" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '    <div class="grid-col xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 pd-md"> <!-- Container size -->' + "\n" +
            '        <div class="card bg-blue-7">' + "\n" +
            '            <img class="img-fluid" src="img/cards3.jpg" alt=""/>' + "\n" +
            '            <div class="card-header bg-blue-6">' + "\n" +
            '                <h2 class="card-title">Fun at the Beach</h2>' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-body pd-md">' + "\n" +
            '                There are some signs of a calm at noon, and these became more distinct as the sun' + "\n" +
            '            </div>' + "\n" +
            '            <div class="card-footer bg-blue-6">' + "\n" +
            '                <button class="btn btn-flat text-white" type="button">' + "\n" +
            '                    Share' + "\n" +
            '                </button>' + "\n" +
            '                <button class="btn btn-flat text-white" type="button">' + "\n" +
            '                    Explore' + "\n" +
            '                </button>' + "\n" +
            '            </div>' + "\n" +
            '        </div>' + "\n" +
            '    </div>' + "\n" +
            '</div>'
        )
    }
});