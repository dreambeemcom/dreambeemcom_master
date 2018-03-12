'use strict';

/**
 * @ngdoc directive
 * @name dreambeemcomApp.directive:stkCategories
 * @description
 * # stkCategories
 */
angular.module('dreambeemcomApp')
  .directive('stkCategories', function () {
    return {
      restrict: 'E',
      scope: {
          sportCategories: '='
      },
      template: '<li ng-repeat="sportCategory in sportCategories"><a ng-href="/{{sportCategory.categoryName}}">{{sportCategory.categoryName}}</a></li>'
    };
  });
