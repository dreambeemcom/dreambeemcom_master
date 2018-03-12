'use strict';

angular.module('dreambeemcomApp')
    .controller('ToastCtrl', function ($scope, stkHttpService, $window, $location, $mdToast) {
        var isDlgOpen;

        $scope.closeToast = function () {
            if (isDlgOpen) return;

            $mdToast
                .hide()
                .then(function () {
                    isDlgOpen = false;
                });
        };

    });