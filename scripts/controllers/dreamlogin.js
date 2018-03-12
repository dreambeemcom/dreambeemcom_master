'use strict';

angular.module('dreambeemcomApp')
    .controller('DreamloginCtrl', function ($scope, $location, stkHttpService, Facebook, $window, stkMetaService) {

        stkMetaService.setTitle('Dreambeem.com - Power Market | Dreamlogin');
        stkMetaService.setDescription('Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
        'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives ' +
        'Interneterlebnis.');

        $scope.checkLogin = function() {
            $scope.loading = true;
            var stkService = stkHttpService.checkLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;
                console.log($scope.response);

                if($scope.response.data === 'ok') {
                    $window.location.href = "https://dreams.dreambeem.com/";
                } else {
                    $window.location.href = "https://www.dreambeem.com/dreamlogin/";
                }
            });
        };

        $scope.FBLogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                console.log(response);
                if (response.status === 'connected') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                } else if (response.status === 'not_authorized') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profilepublish_actions,publish_pages,,business_management");
                } else {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                }
            });
        };

        $scope.twitterOAuth = function() {
            $scope.loading = true;
            var stkService = stkHttpService.TWLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;
                if($scope.response.length > 0) {
                    $window.location.href = $scope.response;
                }
            });
        };
    });