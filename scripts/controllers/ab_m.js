'use strict';

angular.module('dreambeemcomApp')
  .controller('Ab_mCtrl', function ($scope, $location, $rootScope, $timeout, $window,stkHttpService, stkStatusCodeService) {
        $scope.url1 = $location.path();
        $window.prerenderReady = false;

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            var id = completeUrl[4];

            var stkService = stkHttpService.getOldLink(id);
            stkService.then(function (data1) {
                $window.prerenderReady = true;
                if(data1.data === 'ok') {
                    $window.location.href = data1.link1;
                } else {
                    $window.location.href = 'https://www.dreambeem.com/404';
                }
            });
        }
  });
