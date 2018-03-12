'use strict';

angular.module('dreambeemcomApp')
    .controller('AcceptBookingCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.loading = true;
        $scope.booking_confirmation = '';
        $scope.error_confirmation = '';

        var bid = $location.search().bid;
        var stkService = stkHttpService.getBooking(bid);
        stkService.then(function(data) {
            if(data.data) {
                if(data.data[0].bookedIdKind === 'Facebook') {
                    Facebook.getLoginStatus(function(response) {
                        var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                        if (response.status === 'connected') {
                            var stkService = stkHttpService.facebookAcceptBookingConfirmation(bid);
                            stkService.then(function(data1) {
                                $scope.response = data1;

                                if($scope.response.message === 'ok') {
                                    $mdToast.show({
                                        theme       : 'success-toast',
                                        hideDelay   : 3000,
                                        position    : 'top',
                                        controller  : 'ToastCtrl',
                                        templateUrl : 'views/toasts/toast_facebookBooking_confirmation_1.html',
                                        toastClass  : 'md-success-toast-theme'
                                    });

                                    $scope.booking_confirmation = 'Facebook Buchungsbestätigung läuft';
                                    $scope.error_confirmation = false;

                                    $timeout(function() {
                                        $window.location.href = 'https://dreams.dreambeem.com/bookings';
                                    }, 2800);
                                } else {
                                    $mdToast.show($mdToast.simple().textContent($scope.response.data));

                                    $scope.booking_confirmation = 'Facebook Buchungsbestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                                    $scope.error_confirmation = true;
                                }

                                $scope.loading = false;
                            });
                        } else {
                            $window.location = "https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + url + "&response_type=token&scope=email,user_friends,manage_pages,public_profile,business_management";
                        }
                    });
                } else if(data.data[0].bookedIdKind === 'Twitter') {

                    $scope.loading = true;

                    var stkService = stkHttpService.controlLoginTwitter();
                    stkService.then(function(data2) {
                        $scope.response = data2;

                        if($scope.response.data === 'ok') {
                            var stkService = stkHttpService.twitterAcceptBookingConfirmation(bid);
                            stkService.then(function(data3) {
                                $scope.response = data3;

                                if($scope.response.message === 'ok') {
                                    $mdToast.show({
                                        theme       : 'success-toast',
                                        hideDelay   : 3000,
                                        position    : 'top',
                                        controller  : 'ToastCtrl',
                                        templateUrl : 'views/toasts/toast_twitterBooking_confirmation_1.html',
                                        toastClass  : 'md-success-toast-theme'
                                    });

                                    $scope.booking_confirmation = 'Twitter Buchungsbestätigung läuft';
                                    $scope.error_confirmation = false;

                                    $timeout(function() {
                                        $window.location.href = 'https://dreams.dreambeem.com/bookings';
                                    }, 2800);
                                } else {
                                    $mdToast.show($mdToast.simple().textContent($scope.response.data));

                                    $scope.booking_confirmation = 'Twitter Buchungsbestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                                    $scope.error_confirmation = true;
                                }

                                $scope.loading = false;
                            });
                        } else {
                            $scope.twitterOAuth = function() {
                                $scope.loading = true;
                                var stkService = stkHttpService.TWLogin();
                                stkService.then(function(data) {
                                    $scope.response = data;
                                    $window.location = $scope.response;
                                });
                            };
                        }
                    });
                }
            } else {
                $mdToast.show({
                    theme       : 'success-toast',
                    hideDelay   : 3000,
                    position    : 'top',
                    controller  : 'ToastCtrl',
                    templateUrl : 'views/toasts/toast_twitterBooking_confirmation_0.html',
                    toastClass  : 'md-success-toast-theme'
                });
            }
        });

        $scope.loading = false;
    });
