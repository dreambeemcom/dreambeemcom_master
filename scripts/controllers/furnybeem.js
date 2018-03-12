'use strict';

angular.module('dreambeemcomApp')
    .controller('FurnybeemCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.reloadRoute = function() {
            $route.reload();
        };

        $scope.loading = true;
        $scope.furnybeem_confirmation = '';
        $scope.error_confirmation = '';

        var furnyId = $location.search().id;
        var customerId = $location.search().cid;
        var fbReach = $location.search().fbReach;
        var twReach = $location.search().twReach;
        var kind = $location.search().kind;
        var sender = $location.search().sid;

        var furnyObject = {};
        furnyObject.cid = customerId;
        furnyObject.id = furnyId;
        furnyObject.fbReach = fbReach;
        furnyObject.twReach = twReach;
        furnyObject.kind = kind;
        furnyObject.sender = sender;

        var url = encodeURIComponent($location.absUrl());

        if(kind === 'facebook') {
            Facebook.getLoginStatus(function(response) {
                var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                if (response.status === 'connected') {
                    var stkService = stkHttpService.furnybeemConfirmation(furnyObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_furnybeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.furnybeem_confirmation = 'Dreamshare Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com';
                            }, 3000);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Dreamshare Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
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
            stkService.then(function(data) {
                $scope.response = data;

                if($scope.response.data === 'ok') {
                    var stkService = stkHttpService.furnybeemConfirmation(furnyObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_furnybeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.furnybeem_confirmation = 'Dreamshare Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com/';
                            }, 2800);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Dreamshare Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
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

        $scope.loading = false;
    });
