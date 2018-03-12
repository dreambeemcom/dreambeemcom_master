'use strict';

angular.module('dreambeemcomApp')
    .controller('PresseCtrl', function ($scope, $location, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Presse');
        stkMetaService.setDescription('');
    });