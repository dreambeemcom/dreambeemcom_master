'use strict';

angular.module('dreambeemcomApp')
    .service('stkStatusCodeService', function($rootScope) {
        return {
            setStatusCode : function(code) {
                $rootScope.statusCode = code;
            },
            setLocation : function(loc) {
                $rootScope.loc = loc;
            }
        };
    });
