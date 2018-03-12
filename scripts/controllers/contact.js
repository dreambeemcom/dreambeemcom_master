'use strict';

angular.module('dreambeemcomApp')
    .controller('ContactCtrl', function ($scope, $location, stkHttpService, $mdToast, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Kontakt');
        stkMetaService.setDescription('Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
        'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives ' +
        'Interneterlebnis.');

        $scope.sendMessage = function(isValid, name,email,nmessage) {
            if(isValid) {
                $scope.loading = true;

                var contact = {};
                contact.name = name;
                contact.email = email;
                contact.message = nmessage;

                var stkService = stkHttpService.sendMessage(contact);
                stkService.then(function(data) {
                    if(data.data === 'ok') {
                        $mdToast.show({
                            theme       : 'success-toast',
                            hideDelay   : 3000,
                            position    : 'top',
                            controller  : 'ToastCtrl',
                            templateUrl : 'views/toasts/toast_contact_alert_1.html',
                            toastClass  : 'md-success-toast-theme'
                        });
                    } else {
                        $mdToast.show({
                         theme       : 'error-toast',
                         hideDelay   : 3000,
                         position    : 'top',
                         controller  : 'ToastCtrl',
                         textContent : $scope.response.data,
                         templateUrl : 'views/toasts/toast_contact_alert_0.html',
                         toastClass  : 'md-error-toast-theme'
                         });
                    }
                });

                $scope.loading = false;
            }
        };
    });