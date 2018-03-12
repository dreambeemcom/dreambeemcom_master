'use strict';

/**
 * @ngdoc function
 * @name dreambeemcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dreambeemcomApp
 */
angular.module('dreambeemcomApp')
    .controller('AcceptBookingCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.reloadRoute = function() {
            $route.reload();
        };

        $scope.loading = true;
        $scope.furnybeem_confirmation = '';
        $scope.error_confirmation = '';

        var bid = $location.search().bid;
        var stkService = stkHttpService.getBooking(bid);
        stkService.then(function(data) {
            if(data.data.kind === 'facebook') {
                Facebook.getLoginStatus(function(response) {
                    var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                    if (response.status === 'connected') {
                        var stkService = stkHttpService.facebookBookingConfirmation();
                        stkService.then(function(data1) {
                            $scope.response = data1;

                            if($scope.response.data === 'ok') {
                                $mdToast.show({
                                    theme       : 'success-toast',
                                    hideDelay   : 3000,
                                    position    : 'top',
                                    controller  : 'ToastCtrl',
                                    templateUrl : 'views/toasts/toast_facebookBooking_confirmation_1.html',
                                    toastClass  : 'md-success-toast-theme'
                                });

                                $scope.furnybeem_confirmation = 'Facebook Buchungsbestätigung läuft';
                                $scope.error_confirmation = false;

                                $timeout(function() {
                                    $window.location.href = 'https://dreams.dreambeem.com';
                                }, 3000);
                            } else {
                                $mdToast.show($mdToast.simple().textContent($scope.response.data));
                                /*$mdToast.show({
                                 theme       : 'error-toast',
                                 hideDelay   : 3000,
                                 position    : 'top',
                                 controller  : 'ToastCtrl',
                                 textContent : $scope.response.data,
                                 templateUrl : 'views/toasts/toast_furnybeem_confirmation_0.html',
                                 toastClass  : 'md-error-toast-theme'
                                 });*/

                                $scope.furnybeem_confirmation = 'Facebook Buchungsbestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                                $scope.error_confirmation = true;
                            }
                        });
                    } else {
                        $window.location = "https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + url + "&response_type=token&scope=email,user_friends,manage_pages,public_profile,business_management";
                    }
                });
            } else if(kind === 'twitter') {

                $scope.loading = true;

                var stkService = stkHttpService.controlLoginTwitter();
                stkService.then(function(data2) {
                    $scope.response = data2;

                    if($scope.response.data === 'ok') {
                        var stkService = stkHttpService.twitterBookingConfirmation();
                        stkService.then(function(data3) {
                            $scope.response = data3;

                            if($scope.response.data === 'ok') {
                                $mdToast.show({
                                    theme       : 'success-toast',
                                    hideDelay   : 3000,
                                    position    : 'top',
                                    controller  : 'ToastCtrl',
                                    templateUrl : 'views/toasts/toast_twitterBooking_confirmation_1.html',
                                    toastClass  : 'md-success-toast-theme'
                                });

                                $scope.furnybeem_confirmation = 'Twitter Buchungsbestätigung läuft';
                                $scope.error_confirmation = false;

                                $timeout(function() {
                                    $window.location.href = 'https://dreams.dreambeem.com/';
                                }, 2800);
                            } else {
                                $mdToast.show($mdToast.simple().textContent($scope.response.data));
                                /*$mdToast.show({
                                 theme       : 'error-toast',
                                 hideDelay   : 3000,
                                 position    : 'top',
                                 controller  : 'ToastCtrl',
                                 textContent : $scope.response.data,
                                 templateUrl : 'views/toasts/toast_furnybeem_confirmation_0.html',
                                 toastClass  : 'md-error-toast-theme'
                                 });*/

                                $scope.furnybeem_confirmation = 'Twitter Buchungsbestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                                $scope.error_confirmation = true;
                            }
                        });
                    } else {
                        var stkService = stkHttpService.TWLoginRet(url);
                        stkService.then(function(data) {
                            $scope.response = data;

                            if($scope.response.length > 0) {
                                $window.location = encodeURI($scope.response);
                            }
                        });
                    }
                });
            }
        });

        $scope.loading = false;
    });
