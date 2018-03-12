'use strict';

angular.module('dreambeemcomApp')
    .controller('PagemetaCtrl', function ($scope, $location,$rootScope, stkMetaService) {
        $scope.Page = stkMetaService;

        $rootScope.ogTitle = $rootScope.ogTitle;
        $rootScope.ogDescription = $rootScope.ogDescription;
        $rootScope.ogImage = $rootScope.ogImage;
        $rootScope.ogType = 'website';
        $rootScope.ogImageAlt = $rootScope.ogImageAlt;
        $rootScope.ogUrl = $location.absUrl();
    });