'use strict';

angular.module('dreambeemcomApp')
    .controller('SellerloginCtrl', function ($scope, Facebook, $location, stkHttpService, $window) {
         $scope.submitSellerLoginForm = function() {
             $scope.loading = true;
             if($scope.LoginForm.$valid) {
                 var stkService = stkHttpService.sellerLogin($scope.loginEmail, $scope.loginPass);
                 stkService.then(function(data) {
                     $scope.response = data;
                     $scope.loading = false;
                     console.log($scope.response);
                     if($scope.response.data === 'ok') {
                         //$window.location.href = "http://www.seller.newsbeem.com/";
                     }
                 });

                 $scope.loading = false;
             }
         };
    });
