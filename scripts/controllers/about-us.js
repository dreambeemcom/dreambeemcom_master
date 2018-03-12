'use strict';

angular.module('dreambeemcomApp')
    .controller('AboutusCtrl', function ($scope, $location, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Über uns');
        stkMetaService.setDescription('');
    });