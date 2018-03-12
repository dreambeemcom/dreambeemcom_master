'use strict';

angular.module('dreambeemcomApp')
    .controller('DreambeemCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.reloadRoute = function() {
            $route.reload();
        }

        $scope.loading = true;
        $scope.dreambeem_confirmation = '';
        $scope.error_confirmation = '';

        var dreamId = $location.search().id;
        var customerId = $location.search().cid;
        var kind = $location.search().kind;
        var sender = $location.search().sid;
        var link = $location.search().link1;


        var dreamObject = {};
        dreamObject.cid = customerId;
        dreamObject.id = dreamId;
        dreamObject.kind = kind;
        dreamObject.sender = sender;
        dreamObject.link = link;

        var url = encodeURIComponent($location.absUrl());

        if(kind === 'facebook') {
            Facebook.getLoginStatus(function(response) {
                var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                if (response.status === 'connected') {
                    var stkService = stkHttpService.dreambeemConfirmation(dreamObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_dreambeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com';
                            }, 3000);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
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
                    var stkService = stkHttpService.dreambeemConfirmation(dreamObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_dreambeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = dreamObject.link;
                            }, 2800);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Dreambeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
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
