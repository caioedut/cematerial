angular.module('docs').controller('components.tablesCtrl', function ($scope) {
    $scope.$parent.title = 'Tables';

    $scope.codes = {
        basic: (
            '<table>' + "\n" +
            '    <thead>' + "\n" +
            '    <tr>' + "\n" +
            '        <th>Dessert</th>' + "\n" +
            '        <th>Calories</th>' + "\n" +
            '        <th>Fat (g)</th>' + "\n" +
            '        <th>Carbs (g)</th>' + "\n" +
            '    </tr>' + "\n" +
            '    </thead>' + "\n" +
            '    <tbody>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Frozen yogurt</td>' + "\n" +
            '        <td>159</td>' + "\n" +
            '        <td>6.0</td>' + "\n" +
            '        <td>24</td>' + "\n" +
            '    </tr>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Ice cream sandwich</td>' + "\n" +
            '        <td>237</td>' + "\n" +
            '        <td>9.0</td>' + "\n" +
            '        <td>37</td>' + "\n" +
            '    </tr>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Eclair</td>' + "\n" +
            '        <td>262</td>' + "\n" +
            '        <td>16.0</td>' + "\n" +
            '        <td>24</td>' + "\n" +
            '    </tr>' + "\n" +
            '    </tbody>' + "\n" +
            '</table>' + "\n" +
            ''
        ),
        content: (
            '<table>' + "\n" +
            '    <thead>' + "\n" +
            '    <tr>' + "\n" +
            '        <th class="table-content">Dessert</th>' + "\n" +
            '        <th>Calories</th>' + "\n" +
            '        <th>Fat (g)</th>' + "\n" +
            '        <th>Carbs (g)</th>' + "\n" +
            '    </tr>' + "\n" +
            '    </thead>' + "\n" +
            '    <tbody>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Frozen yogurt</td>' + "\n" +
            '        <td>159</td>' + "\n" +
            '        <td>6.0</td>' + "\n" +
            '        <td>24</td>' + "\n" +
            '    </tr>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Ice cream sandwich</td>' + "\n" +
            '        <td>237</td>' + "\n" +
            '        <td>9.0</td>' + "\n" +
            '        <td>37</td>' + "\n" +
            '    </tr>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>Eclair</td>' + "\n" +
            '        <td>262</td>' + "\n" +
            '        <td>16.0</td>' + "\n" +
            '        <td>24</td>' + "\n" +
            '    </tr>' + "\n" +
            '    </tbody>' + "\n" +
            '</table>' + "\n" +
            ''
        ),
        edit_inline: (
            '<table>' + "\n" +
            '    <thead>' + "\n" +
            '    <tr>' + "\n" +
            '        <th class="table-content">Dessert</th>' + "\n" +
            '        <th>Calories</th>' + "\n" +
            '        <th>Fat (g)</th>' + "\n" +
            '        <th>Carbs (g)</th>' + "\n" +
            '    </tr>' + "\n" +
            '    </thead>' + "\n" +
            '    <tbody>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="Frozen yogurt"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="159"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="6.0"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="24"/>' + "\n" +
            '        </td>' + "\n" +
            '    </tr>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="Ice cream sandwich"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="237"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="9.0"/>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <input class="no-style set-block" type="text" value="37"/>' + "\n" +
            '        </td>' + "\n" +
            '    </tr>' + "\n" +
            '    </tbody>' + "\n" +
            '</table>' + "\n" +
            ''
        ),
        edit_dropdown: (
            '<table>' + "\n" +
            '    <thead>' + "\n" +
            '    <tr>' + "\n" +
            '        <th class="table-content">Dessert</th>' + "\n" +
            '        <th>Calories</th>' + "\n" +
            '        <th>Fat (g)</th>' + "\n" +
            '        <th>Carbs (g)</th>' + "\n" +
            '    </tr>' + "\n" +
            '    </thead>' + "\n" +
            '    <tbody>' + "\n" +
            '    <tr>' + "\n" +
            '        <td>' + "\n" +
            '            <div class="dropdown">' + "\n" +
            '                <div data-toggle="dropdown" data-focus="#i1">' + "\n" +
            '                    Frozen yogurt' + "\n" +
            '                </div>' + "\n" +
            '                <div class="dropdown-body dropdown-sm top left">' + "\n" +
            '                    <div class="pd-md">' + "\n" +
            '                        <input id="i1" class="input input-blue-6 text-md" type="text" value="Frozen yogurt"/>' + "\n" +
            '                    </div>' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <div class="dropdown">' + "\n" +
            '                <div data-toggle="dropdown" data-focus="#i2">' + "\n" +
            '                    159' + "\n" +
            '                </div>' + "\n" +
            '                <div class="dropdown-body dropdown-xs top right">' + "\n" +
            '                    <div class="pd-md">' + "\n" +
            '                        <input id="i2" class="input input-blue-6 text-md" type="text" value="159"/>' + "\n" +
            '                    </div>' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <div class="dropdown">' + "\n" +
            '                <div data-toggle="dropdown" data-focus="#i3">' + "\n" +
            '                    6.0' + "\n" +
            '                </div>' + "\n" +
            '                <div class="dropdown-body dropdown-xs top right">' + "\n" +
            '                    <div class="pd-md">' + "\n" +
            '                        <input id="i3" class="input input-blue-6 text-md" type="text" value="6.0"/>' + "\n" +
            '                    </div>' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '        </td>' + "\n" +
            '        <td>' + "\n" +
            '            <div class="dropdown">' + "\n" +
            '                <div data-toggle="dropdown" data-focus="#i4">' + "\n" +
            '                    24' + "\n" +
            '                </div>' + "\n" +
            '                <div class="dropdown-body dropdown-xs top right">' + "\n" +
            '                    <div class="pd-md">' + "\n" +
            '                        <input id="i4" class="input input-blue-6 text-md" type="text" value="24"/>' + "\n" +
            '                    </div>' + "\n" +
            '                </div>' + "\n" +
            '            </div>' + "\n" +
            '        </td>' + "\n" +
            '    </tr>' + "\n" +
            '    </tbody>' + "\n" +
            '</table>' + "\n" +
            ''
        )
    }
});