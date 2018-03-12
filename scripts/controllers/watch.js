'use strict';


angular.module('dreambeemcomApp')
  .controller('WatchCtrl', function ($scope, $location, $window, stkHttpService, stkStatusCodeService) {
        $scope.id = $location.search().id;
        $scope.kind = $location.search().kind;

        if($scope.id && $scope.id !== undefined) {
            if($scope.kind && $scope.kind === 'advert') {;
                var stkService = stkHttpService.getOldLink($scope.id);
                stkService.then(function (data) {
                    if(data.data === 'ok') {
                        $window.location.href = data.link1;
                    } else {
                        $window.location.href = 'https://www.dreambeem.com/404';
                    }
                });
            }
        }
  });
