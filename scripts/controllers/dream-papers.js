'use strict';

angular.module('dreambeemcomApp')
    .controller('DreamPapersCtrl', function ($scope, stkHttpService) {
        $scope.loading = true;
        $scope.dreamPapersCount = 0;

        var stkService = stkHttpService.getDreamPapersCountries();
        stkService.then(function(data) {
            $scope.dreamPapersCountries = data.dreamPapers;
            $scope.loading = false;
        });

        $scope.getFirmsWithCountry = function(value) {
            $scope.loading = true;
            var stkService = stkHttpService.getDreamPapersWithCountry(value);
            stkService.then(function(data) {
                $scope.dreamPapers = data.dreamPapers;

                var stkService = stkHttpService.getDreamPapersCount(value);
                stkService.then(function(data1) {
                    $scope.dreamPapersCount = data1.count[0].sCount;
                    $scope.loading = false;
                });
            });
        };
    });
