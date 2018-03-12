'use strict';

angular.module('dreambeemcomApp')
  .controller('LoginCtrl', function ($scope, Facebook, $location, stkHttpService, $window) {

        $scope.loginStatus = 'disconnected';
        $scope.facebookIsReady = false;

        $scope.checkLogin = function() {

            $scope.loading = true;
            var stkService = stkHttpService.checkLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;

                if($scope.response.data === 'ok') {
                    $window.location.href = "https://dreams.dreambeem.com/";
                } else {
                    $window.location.href = "https://www.dreambeem.com/dreamlogin/";
                }
            });
        };

        $scope.FBlogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,business_management");
                } else if (response.status === 'not_authorized') {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,business_management");
                } else {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,business_management");
                }
            });
        };

        $scope.removeAuth = function () {
            Facebook.api({
                method: 'Auth.revokeAuthorization'
            }, function(response) {
                Facebook.getLoginStatus(function(response) {
                    $scope.loginStatus = response.status;
                });
            });
        };

        $scope.twitterOAuth = function() {
            $scope.loading = true;
            var stkService = stkHttpService.TWLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $window.location = $scope.response;
            });
        };
  });
