'use strict';

angular.module('dreambeemcomApp')
    .controller('DreamEventsCtrl', function ($scope, stkHttpService) {
        $scope.loading = true;
        var stkService = stkHttpService.getDreamEvents();
        stkService.then(function(data) {
            console.log(data.dreamEvents);
            $scope.dreamEvents = data.dreamEvents;
            $scope.dreamEventsCount = Object.keys($scope.dreamEvents).length;
            $scope.loading = false;
        });
    });
