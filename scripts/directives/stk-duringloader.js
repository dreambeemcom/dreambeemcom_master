'use strict';

/**
 * @ngdoc directive
 * @name dreambeemcomApp.directive:stkDuringLoader
 * @description
 * # stkDuringLoader
 */
angular.module('dreambeemcomApp')
    .directive('stkDuringLoader',   ['$http' ,function ($http)
    {
        return {
            restrict: 'A',
            link: function ($scope, element)
            {
                $scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                $scope.$watch($scope.isLoading, function (v) {
                    if(v) {
                        element.show();
                    }else {
                        element.hide();
                    }
                });
            }
        };

    }]);
