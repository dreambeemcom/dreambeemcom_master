'use strict';

angular.module('dreambeemcomApp')
  .controller('MarkCtrl', function ($scope, $location, $window, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');

  });
