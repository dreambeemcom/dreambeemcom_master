'use strict';

angular.module('dreambeemcomApp')
    .controller('DataSecurityCtrl', function ($scope, $location, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Datenschutz');
        stkMetaService.setDescription('Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
        'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives ' +
        'Interneterlebnis.');
    });
