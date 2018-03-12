'use strict';

angular.module('dreambeemcomApp')
  .controller('Ab_lCtrl', function ($scope, $window, $location,stkHttpService, stkStatusCodeService) {
        $scope.url1 = $location.path();

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            var id = completeUrl[4];
            //alert(id);

            var stkService = stkHttpService.getOldLink(id);
            stkService.then(function (data) {
                if(data.data === 'ok') {
                    $window.location.href = data.link1;
                } else {
                    $window.location.href = 'https://www.dreambeem.com/404';
                }
            });
        }
});
