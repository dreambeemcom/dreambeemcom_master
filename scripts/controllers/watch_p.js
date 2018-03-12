'use strict';

angular.module('dreambeemcomApp')
  .controller('Watch_pCtrl', function ($scope, $location, $window, stkHttpService, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');
  });
