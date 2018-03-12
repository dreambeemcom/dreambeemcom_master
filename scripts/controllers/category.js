'use strict';

angular.module('dreambeemcomApp')
  .controller('OldCategoryCtrl', function ($scope, $location, $window, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');
  });
