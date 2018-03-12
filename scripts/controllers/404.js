'use strict';

angular.module('dreambeemcomApp')
    .controller('404Ctrl', function ($scope, $document, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {

        stkMetaService.setTitle('Dreambeem.com - Seite nicht gefunden');
        stkMetaService.setDescription('Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
        'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives ' +
        'Interneterlebnis.');
        stkStatusCodeService.setStatusCode('404');



    });
