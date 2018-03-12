'use strict';

angular.module('dreambeemcomApp')
    .controller('SportCtrl', ['$scope', '$location', function ($scope, $location, $element) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.isCurrentPath = function (path) {
            return $location.path() === path;
        };

        $scope.showSubMenu = function() {
            console.log('sfsxsdfgs');
            $element.show();
        }
    }]);
