'use strict';

angular.module('dreambeemcomApp')
    .controller('DataSecurityCtrl', function ($scope, $location, stkMetaService, $rootScope) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Datenschutz');
        stkMetaService.setDescription('Hier findest Du die Datenschutzerklärung der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Datenschutz';
        $rootScope.ogDescription = 'Hier findest Du die Datenschutzerklärung der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/datasecurity_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

    });

angular.module('dreambeemcomApp')
    .controller('PartnerCtrl', function ($scope, $location, stkHttpService, stkMetaService, $rootScope) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Partner');
        stkMetaService.setDescription('Hier findest Du sämtliche Partner der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Partner';
        $rootScope.ogDescription = 'Hier findest Du sämtliche Partner der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/partner_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

        $scope.sloading = true;

        if(!$scope.partners) {
            var stkService = stkHttpService.getPartners();
            stkService.then(function(data1) {
                $scope.partners = data1.data.data;
                $scope.sloading = false;
            });
        }
    });

angular.module('dreambeemcomApp')
    .controller('AgbProductsCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | AGBs Shops');
        stkMetaService.setDescription('Hier findest Du die Allgemeinen Geschäftsbedingungen für Shops der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | AGB Shops';
        $rootScope.ogDescription = 'Hier findest Du die Allgemeinen Geschäftsbedingungen für Shops der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbproducts_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('SoftwareLicenseCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Software Lizenz');
        stkMetaService.setDescription('Hier findest Du die Gesetze für Vervielfältigung von Software der Europäischen Union und den Preis für die Software Lizenz der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Software Lizenz';
        $rootScope.ogDescription = 'Hier findest Du die Gesetze für Vervielfältigung von Software der Europäischen Union und den Preis für die Software Lizenz der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/softwarelicense_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('FaqCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | FAQ');
        stkMetaService.setDescription('Hier findest Du meist gefragten Fragen (FAQ) der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | FAQ';
        $rootScope.ogDescription = 'Hier findest Du meist gefragten Fragen (FAQ) der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/faq_site.png';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('DreamsBalanceCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Dreams Guthaben');
        stkMetaService.setDescription('Hier findest Du die Beschreibung von Dreams Guthaben der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dreams Guthaben';
        $rootScope.ogDescription = 'Hier findest Du die Beschreibung von Dreams Guthaben der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/dreamsbalance_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('ImpressumCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Impressum');
        stkMetaService.setDescription('Hier findest Du das Impressum der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Impressum';
        $rootScope.ogDescription = 'Hier findest Du das Impressum der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/impressum_site.png';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('DreamProductsSellCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Dream - Products verkaufen');
        stkMetaService.setDescription('Hier findest Du die Beschreibung zum Verkauf von Dream - Products der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream Products verkaufen';
        $rootScope.ogDescription = 'Hier findest Du die Beschreibung zum Verkauf von Dream - Products der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/dreamproductssell_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('DreamEventsSellCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Dream - Events anbieten');
        stkMetaService.setDescription('Hier findest Du die Beschreibung des Angebots von Dream - Events der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream Events verkaufen';
        $rootScope.ogDescription = 'Hier findest Du die Beschreibung des Angebots von Dream - Events der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/dreameventssell_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('AboutusCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Über uns');
        stkMetaService.setDescription('Hier findest Du die Teammitglieder der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Über uns';
        $rootScope.ogDescription = 'Hier findest Du die Teammitglieder der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/aboutus_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

    });

angular.module('dreambeemcomApp')
    .controller('AgbEventsCtrl', function ($scope, stkMetaService, $rootScope, $location) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | AGBs Dienstleistungen');
        stkMetaService.setDescription('Hier findest Du die Allgemeinen Geschäftsbedingungen Dienstleistungen der Dreambeem.com - Power Market - Social - E - Commerce Service.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | AGBs Dienstleistungen';
        $rootScope.ogDescription = 'Hier findest Du die Allgemeinen Geschäftsbedingungen Dienstleistungen der Dreambeem.com - Power Market - Social - E - Commerce Service.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

    });

angular.module('dreambeemcomApp')
    .controller('WegweiserCtrl', function ($scope, $location, $rootScope, $window, stkHttpService,stkMetaService, stkStatusCodeService) {
        var url = $location.path();

        if(url === '/wegweiser') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser');
            stkMetaService.setDescription('Dreambeem.coms Wegweiser zeigt den Weg für eine erfolgreiche Nutzung von Dreambeem.com. Erklärt werden Begriffe, wie Dropshipping, Social Media, sowie die Verknüpfung der ' +
            'beider Begrifflichkeiten zu dem System von Dreambeem.com. Chancen auf dem freien Markt sind ebenso enthalten, wie Marketing.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser';
            $rootScope.ogDescription = 'Dreambeem.coms Wegweiser zeigt den Weg für eine erfolgreiche Nutzung von Dreambeem.com. Erklärt werden Begriffe, wie Dropshipping, Social Media, sowie die Verknüpfung der ' +
            'beider Begrifflichkeiten zu dem System von Dreambeem.com. Chancen auf dem freien Markt sind ebenso enthalten, wie Marketing.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/wegweiser.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        } else if(url === '/wegweiser/dropshipping/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping');
            stkMetaService.setDescription('Um zu erklären, wie Dropshipping funktioniert, betrachten wir zuerst die Art, wie der Einkaufsprozess im klassischen Online - Handel vonstatten geht. Der Händler entscheidet sich für eine bestimmte Produktpalette. Er kauft, meistens in großen Mengen, diese Waren ein um sie wieder auf dem freien Markt gegen eine Marge anzubieten. Die Lagerung erfolgt in speziellen Lagerräumen oder in der Privatwohnung.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Dropshipping';
            $rootScope.ogDescription = 'Um zu erklären, wie Dropshipping funktioniert, betrachten wir zuerst die Art, wie der Einkaufsprozess im klassischen Online - Handel vonstatten geht. Der Händler entscheidet sich für eine bestimmte Produktpalette. Er kauft, meistens in großen Mengen, diese Waren ein um sie wieder auf dem freien Markt gegen eine Marge anzubieten. Die Lagerung erfolgt in speziellen Lagerräumen oder in der Privatwohnung.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/dropshipping.png';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        } else if(url === '/wegweiser/social-media/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Social Media');
            stkMetaService.setDescription('Social Media hat sich als Grundbegriff in den Medien eingebürgert. Es wird von der Internetgemeinde am häufigsten genutzt und stellt für viele die täglichen Klicks dar. Ob Facebook, Twitter, Instagram oder Quora - Sie sind alle soziale Kanäle, ohne die wir unser tägliches Leben nicht mehr vorstellen können. Facebook - Seiten und Twitter Follower gehören zu den Merkmalen, die dieses Medium am besten beschreiben.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Social Media';
            $rootScope.ogDescription = 'Social Media hat sich als Grundbegriff in den Medien eingebürgert. Es wird von der Internetgemeinde am häufigsten genutzt und stellt für viele die täglichen Klicks dar. Ob Facebook, Twitter, Instagram oder Quora - Sie sind alle soziale Kanäle, ohne die wir unser tägliches Leben nicht mehr vorstellen können. Facebook - Seiten und Twitter Follower gehören zu den Merkmalen, die dieses Medium am besten beschreiben.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/socialmedia.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/marketing/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Marketing');
            stkMetaService.setDescription('Jeder, der im Internet aktiv ist, hat mindestens einen Social Media Account bei Facebook, Twitter & Co. Somit stellt er/sie bereits die Grundlage für Social Media Marketing dar. Jeder verbundene User ist ein potenzieller Käufer. Mit dem richtigen Marketing wirst Du schnell merken, dass die Leute bei seriöser Abwicklung immer wieder kommen werden.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Marketing';
            $rootScope.ogDescription = 'Jeder, der im Internet aktiv ist, hat mindestens einen Social Media Account bei Facebook, Twitter & Co. Somit stellt er/sie bereits die Grundlage für Social Media Marketing dar. Jeder verbundene User ist ein potenzieller Käufer. Mit dem richtigen Marketing wirst Du schnell merken, dass die Leute bei seriöser Abwicklung immer wieder kommen werden.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/werbung.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/chancen-auf-dem-markt/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Chancen auf dem Markt');
            stkMetaService.setDescription('Die Chancen auf dem freien Markt sind gut bis sehr gut, da sich mit Social Media durch Vernetzung der User eine hohe Reichweite erzielen lässt. Du findest mit den richtigen Maßnahmen immer jemanden, der sich für deine Produkte interessieren wird.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Chancen auf dem Markt';
            $rootScope.ogDescription = 'Die Chancen auf dem freien Markt sind gut bis sehr gut, da sich mit Social Media durch Vernetzung der User eine hohe Reichweite erzielen lässt. Du findest mit den richtigen Maßnahmen immer jemanden, der sich für deine Produkte interessieren wird.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/chancen.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/dropshipping-social-media/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping & Social Media');
            stkMetaService.setDescription('Dropshipping & Social Media sind richtig eingesetzt ein optimales Gespann um gewinnbringend Waren und Dienstleistungen im Internet anzubieten. Dropshipping liefert das Modell zum simplen Verkaufen von Waren im Internet und Social Media liefert die gewünschte Reichweite um Menschen zu erreichen, die einkaufen wollen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Dropshipping & Social Media';
            $rootScope.ogDescription = 'Dropshipping & Social Media sind richtig eingesetzt ein optimales Gespann um gewinnbringend Waren und Dienstleistungen im Internet anzubieten. Dropshipping liefert das Modell zum simplen Verkaufen von Waren im Internet und Social Media liefert die gewünschte Reichweite um Menschen zu erreichen, die einkaufen wollen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/socialdropshipping.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/dreambeems-rolle/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dreambeems Rolle');
            stkMetaService.setDescription('Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Dreambeems Rolle';
            $rootScope.ogDescription = 'Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/wegweiser/dreambeem.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/twitter-follower/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Twitter Follower erhalten');
            stkMetaService.setDescription('Mit Dreambeem.com kannst Du mit ein wenig Fleiß eine Menge an Followern erhalten. Täglich Leuten folgen, die z.B. in Deiner Sprache Twitter nutzen. Über 1,3 Mio. TwitterBenutzer sind in Dreambeem.com enthalten.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser | Twitter Follower erhalten';
            $rootScope.ogDescription = 'Mit Dreambeem.com kannst Du mit ein wenig Fleiß eine Menge an Followern erhalten. Täglich Leuten folgen, die z.B. in Deiner Sprache Twitter nutzen. Über 1,3 Mio. TwitterBenutzer sind in Dreambeem.com enthalten.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/follower.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
        else if(url === '/wegweiser/twitter-messages/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Twitter Messages');
            stkMetaService.setDescription('Über unsere Einstellungen lassen sich automatisierte Twitter Messages senden. Bei jedem neuen Follower wird eine von Dir definierte Nachricht an den entsprechenden Twitter - User gesendet.Somit bleibst Du im Gespräch und sendest dem Twitter Follower Signale, dass Du in der Community aktiv bist. ');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Wegweiser - Twitter Messages';
            $rootScope.ogDescription = 'Über unsere Einstellungen lassen sich automatisierte Twitter Messages senden. Bei jedem neuen Follower wird eine von Dir definierte Nachricht an den entsprechenden Twitter - User gesendet.Somit bleibst Du im Gespräch und sendest dem Twitter Follower Signale, dass Du in der Community aktiv bist.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/follower.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();

        }
    });

angular.module('dreambeemcomApp')
    .controller('TippsCtrl', function ($scope, $location, $rootScope, $window, stkHttpService,stkMetaService, stkStatusCodeService) {
        var url = $location.path();

        if(url === '/tipps') {
            stkMetaService.setTitle('Dreambeem.com - Tipps');
            stkMetaService.setDescription('Dreambeem.coms Tipps erklären, wie Du mit Dreambeem.com Erfolge erzielen kannst. Verschiedene Marketing Methoden sind hier aufgelistet und werden detailliert beschrieben.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps';
            $rootScope.ogDescription = 'Dreambeem.coms Tipps erklären, wie Du mit Dreambeem.com Erfolge erzielen kannst. Verschiedene Marketing Methoden sind hier aufgelistet und werden detailliert beschrieben.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        } else if(url === '/tipps/facebook-seite/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Facebook Seiten');
            stkMetaService.setDescription('Facebook - Seiten sind im Social Media Marketing ein wichtiges Instrument. Ein einfaches Handling gewährleisten eine hohe Akzeptanz in der Social Media Community. Durch dieses Instrument lassen sich ohne Probleme am Tag mehrere Posts Richtung Ihres Dreambeem - Shops absetzen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Facebook Seiten';
            $rootScope.ogDescription = 'Facebook - Seiten sind im Social Media Marketing ein wichtiges Instrument. Ein einfaches Handling gewährleisten eine hohe Akzeptanz in der Social Media Community. Durch dieses Instrument lassen sich ohne Probleme am Tag mehrere Posts Richtung Ihres Dreambeem - Shops absetzen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/fbseite.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        } else if(url === '/tipps/private-nachrichten/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Private Nachrichten');
            stkMetaService.setDescription('Private Nachrichten sind im Social Media Marketing als Kaltakquise zu betrachten. Nichts desto trotz, nutzen Sie im Allgemeinen sehr viel. Durch das Versenden guter Bilder und Texte werden die Leute darauf aufmerksam, was Du verkaufst und was Du außerdem durch Deinen Dreambeem - Shop bieten kannst. Es ist wichtig, dass die potenziellen Kunden das volle Informationspaket über Deine Produkte erhalten.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Private Nachrichten';
            $rootScope.ogDescription = 'Private Nachrichten sind im Social Media Marketing als Kaltakquise zu betrachten. Nichts desto trotz, nutzen Sie im Allgemeinen sehr viel. Durch das Versenden guter Bilder und Texte werden die Leute darauf aufmerksam, was Du verkaufst und was Du außerdem durch Deinen Dreambeem - Shop bieten kannst. Es ist wichtig, dass die potenziellen Kunden das volle Informationspaket über Deine Produkte erhalten.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/pn.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
        else if(url === '/tipps/viele-follower/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Viele Follower');
            stkMetaService.setDescription('Viele Follower in den sozialen Medien zu erhalten, ist gar nicht so schwer. Vor allem bringen verbundene User eine immer größere Reichweite. Ob Freunde, Bekannte oder gänzlich Unbekannte, sie alle stellen Deinen potenziellen Kunden dar.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Viele Follower';
            $rootScope.ogDescription = 'Viele Follower in den sozialen Medien zu erhalten, ist gar nicht so schwer. Vor allem bringen verbundene User eine immer größere Reichweite. Ob Freunde, Bekannte oder gänzlich Unbekannte, sie alle stellen Deinen potenziellen Kunden dar.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/follower.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
        else if(url === '/tipps/facebook-gruppen/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Facebook Gruppen');
            stkMetaService.setDescription('Facebook - Gruppen dienen für die meisten als Informationsquelle für bestimmte Themengebiete. Vorrangig werden sie ähnlich, wie eine Facebook - Seite genutzt. Es werden regelmäßig Beiträge veröffentlicht. Mittlerweile gibt es Gruppen, die sich ausschließlich um Marketing für das E - Commerce beschäftigen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Facebook Gruppen';
            $rootScope.ogDescription = 'Facebook - Gruppen dienen für die meisten als Informationsquelle für bestimmte Themengebiete. Vorrangig werden sie ähnlich, wie eine Facebook - Seite genutzt. Es werden regelmäßig Beiträge veröffentlicht. Mittlerweile gibt es Gruppen, die sich ausschließlich um Marketing für das E - Commerce beschäftigen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/gruppen.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
        else if(url === '/tipps/immer-posten/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Immer posten');
            stkMetaService.setDescription('Immer posten heißt das Motto. Wie schon vorher erwähnt, ist posten ein Kontaktsport. Über den Tag verteilt sollte man mindestens 30 Posts in verschiedenen Kanälen absetzen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Immer posten';
            $rootScope.ogDescription = 'Immer posten heißt das Motto. Wie schon vorher erwähnt, ist posten ein Kontaktsport. Über den Tag verteilt sollte man mindestens 30 Posts in verschiedenen Kanälen absetzen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/immerposten.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
        else if(url === '/tipps/beemline/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Beemline');
            stkMetaService.setDescription('Mit der Dreambeem Beemline lassen sich durch die Funktion "Dreambeem" und "Dreamshare" permanent Posts absetzen, die die User sehen, wenn Ihre Beemline - Konfiguration entsprechend konfiguriert ist. Bei Interesse, welches von vorne herein gegeben ist, da die Beemline - Einstellung dies gewährleistet, klicken sie auf Deine Posts und gehen ggf. positiv auf Dein Angebot ein.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Beemline';
            $rootScope.ogDescription = 'Mit der Dreambeem Beemline lassen sich durch die Funktion "Dreambeem" und "Dreamshare" permanent Posts absetzen, die die User sehen, wenn Ihre Beemline - Konfiguration entsprechend konfiguriert ist. Bei Interesse, welches von vorne herein gegeben ist, da die Beemline - Einstellung dies gewährleistet, klicken sie auf Deine Posts und gehen ggf. positiv auf Dein Angebot ein.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/beemline.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        } else if(url === '/tipps/andere-social-media-kanaele/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Andere Social Media Kanäle');
            stkMetaService.setDescription('Natürlich sind andere soziale Medien als Facecbook & Twitter auch interessant für uns. Instagram, Quora oder Youtube können ebenso genutzt werden, wie persönliche Kontakte über Telefon und Email. Aber dazu später mehr. Wenn man sich eine Strategie für Social Media erarbeitet hat - sprich die richtigen Bilder, gute Marketingtexte usw. - hat, kann man ohne Bedenken die weniger bekannten sozialen Kanäle nutzen.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Andere Social Media Kanäle';
            $rootScope.ogDescription = 'Natürlich sind andere soziale Medien als Facecbook & Twitter auch interessant für uns. Instagram, Quora oder Youtube können ebenso genutzt werden, wie persönliche Kontakte über Telefon und Email. Aber dazu später mehr. Wenn man sich eine Strategie für Social Media erarbeitet hat - sprich die richtigen Bilder, gute Marketingtexte usw. - hat, kann man ohne Bedenken die weniger bekannten sozialen Kanäle nutzen.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/socialmedia.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
        else if(url === '/tipps/kontakte/') {
            stkMetaService.setTitle('Dreambeem.com - Tipps - Kontakte');
            stkMetaService.setDescription('Emaillisten und Telefonnummern helfen ebenso wie Social Media um Personen auf Deinen Shop aufmerksam zu machen. Der persönliche Kontakt zum Kunden ist genauso wichtig, wie der Verkauf. Produktbilder und Beschreibungen in Emails in Form eines Newsletters sind genauso erfolgsversprechend, wie Facebook - Seiten oder private Nachrichten.');
            stkStatusCodeService.setStatusCode('200');

            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Tipps | Kontakte';
            $rootScope.ogDescription = 'Emaillisten und Telefonnummern helfen ebenso wie Social Media um Personen auf Deinen Shop aufmerksam zu machen. Der persönliche Kontakt zum Kunden ist genauso wichtig, wie der Verkauf. Produktbilder und Beschreibungen in Emails in Form eines Newsletters sind genauso erfolgsversprechend, wie Facebook - Seiten oder private Nachrichten.';
            $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/kontakte.jpg';
            $rootScope.ogType = 'website';
            $rootScope.ogUrl = $location.absUrl();
        }
    });

angular.module('dreambeemcomApp')
    .controller('DreamloginCtrl', function ($scope, $location, $rootScope,  stkHttpService, Facebook, $window, stkMetaService) {
            stkMetaService.setTitle('Dreambeem.com - Power Market | Dream - Login');
            stkMetaService.setDescription('Hier findest Du den Twitter und Facebook Login.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
        $rootScope.ogDescription = 'Hier findest Du den Twitter und Facebook Login.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();


        $scope.checkLogin = function() {
            $scope.loading = true;
            var stkService = stkHttpService.checkLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;

                if($scope.response.data === 'ok') {
                    $window.location.href = "https://dreams.dreambeem.com/";
                } else {
                    $window.location.href = "https://www.dreambeem.com/dreamlogin/";
                }
            });
        };

        $scope.FBLogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                } else if (response.status === 'not_authorized') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profilepublish_actions,publish_pages,,business_management");
                } else {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                }
            });
        };

        $scope.twitterOAuth = function() {
            $scope.loading = true;
            var stkService = stkHttpService.TWLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;
                if($scope.response.length > 0) {
                    $window.location.href = $scope.response;
                }
            });
        };
    });

angular.module('dreambeemcomApp')
    .controller('MainCtrl', function ($scope, $mdMenu, Facebook, $compile, $document, $location, $rootScope, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {

        stkMetaService.setTitle('Dreambeem.com - Power Market');
        stkMetaService.setDescription('Dreambeem.com Service ist kostenlos - Verkaufe aus Deinem eigenen Dreambeem.com - Webshop Produkte - Vermarkte Dich über Dreambeem.com bis tief in die sozialen Medien - Buche oder werde gebucht - um Leute kennenzulernen - Erhalte aktuelle Informationen über das Tagesgeschehen mit Dreambeem.com');

        $scope.standard = true;
        $scope.searchShow = false;
        $scope.ok = false;

        $scope.optionsCount = {
            useEasing : true,
            useGrouping : true,
            separator : '.',
            decimal : ',',
            prefix : '',
            suffix : ''
        };

        $rootScope.ogTitle = 'Dreambeem.com - Power Market';
        var desc = 'Verkaufe aus Deinem eigenen Dreambeem.com - Webshop Produkte - Vermarkte Dich über Dreambeem.com bis tief in die sozialen Medien - Buche oder werde gebucht - um Leute kennenzulernen - Erhalte aktuelle Informationen über das Tagesgeschehen mit Dreambeem.com - Dreambeem.com Service ist kostenlos';
        $rootScope.ogDescription = desc.substr(0,399);
        $rootScope.ogImage =  'https://www.dreambeem.com/images/start3.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

        $scope.FBLogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                } else if (response.status === 'not_authorized') {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profilepublish_actions,publish_pages,,business_management");
                } else {
                    $window.location = encodeURI("https://facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,publish_actions,publish_pages,business_management");
                }
            });
        };

        $scope.twitterOAuth = function() {
            $scope.loading = true;
            var stkService = stkHttpService.TWLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;
                if($scope.response.length > 0) {
                    $window.location.href = $scope.response;
                }
            });
        };

        $scope.submitSearch = function(isValid,searchText) {
            $scope.loading = true;

            if(isValid) {
                $scope.standard = false;
                $scope.searchShow = true;
                $location.path('/search').search({query: encodeURIComponent(searchText), page: 1});
            }

            $scope.loading = false;
        };

        $scope.initCounts = function() {

                var stkService = stkHttpService.ShopsCount();
                stkService.then(function(data1) {
                    $scope.shopsCount = data1;
                });

                var stkService = stkHttpService.ProductsCount();
                stkService.then(function(data1) {
                    $scope.productsCount = data1;
                });

                var stkService = stkHttpService.NewsCount();
                stkService.then(function(data1) {
                    $scope.newsCount = data1.data;
                });

                var stkService = stkHttpService.DreamsCount();
                stkService.then(function(data2) {
                    $scope.dreamsCount = data2;
                });

        };

        $scope.showAdvanced = function(ev, kind,pid) {
            switch(kind) {
                case 'cart':
                    $mdDialog.show({
                        controller: DialogCart,
                        templateUrl: 'views/dialogs/cart.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                        .then(function() {

                        });
                    break;
            }
        };

        $scope.addProduct2Cart = function(id,pid) {
            if(id && pid) {
                $rootScope.pid = pid;
                var stkService = stkHttpService.addProduct2Cart(id,pid);
                stkService.then(function(data1) {
                    if(data1.data === 'ok') {
                        var productCartCount = parseInt($('#cart').text());
                        $scope.cartNumber = (productCartCount + 1);
                        $('#cart').text($scope.cartNumber);
                        $mdToast.show({
                            theme       : 'success-toast',
                            hideDelay   : 3000,
                            position    : 'top',
                            controller  : 'ToastCtrl',
                            templateUrl : 'views/toasts/toast_cart_alert_1.html',
                            toastClass  : 'md-success-toast-theme'
                        });
                    } else {
                        $mdToast.show({
                            theme       : 'success-toast',
                            hideDelay   : 3000,
                            position    : 'top',
                            controller  : 'ToastCtrl',
                            templateUrl : 'views/toasts/toast_cart_alert_0.html',
                            toastClass  : 'md-success-toast-theme'
                        });
                    }
                });
            }
        };

        function DialogCart($scope, $mdDialog, stkHttpService) {
            $scope.cartLoader = true;

            var stkService = stkHttpService.getCartProductsSum($rootScope.pid);
            stkService.then(function(data1) {
                if(data1.data !== 'failed') {
                    if(parseInt(data1.data.length) > 0) {

                        for(var i = 0;i < parseInt(data1.data.length);i++) {
                            if(data1.data[i][0].selling_price) {
                                var sum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data1.data[i][0].selling_price);
                                data1.data[i][0].selling_price = sum;
                            }

                            if(data1.data[i][0].dream_price) {
                                var sum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data1.data[i][0].dream_price);
                                data1.data[i][0].dream_price = sum;
                            }
                        }
                    }

                    var dataSumAll = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data1.dataSumAll);
                    data1.dataSumAll = dataSumAll;

                    var dataSumShipping = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data1.dataSumShipping);
                    data1.dataSumShipping = dataSumShipping;

                    var dataSumProducts = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data1.dataSumProducts);
                    data1.dataSumProducts = dataSumProducts;

                    $scope.products = data1;
                } else {
                    $scope.cartMessage = 'Keine Produkte im Warenkorb!';
                }

                $scope.cartLoader = false;
            });

            $scope.deleteProduct = function(id, pid) {
                if(id) {
                    $scope.cartLoader = true;

                    var stkService = stkHttpService.deleteCartProduct(id,$rootScope.pid);
                    stkService.then(function (data1) {
                        if (data1.data !== 'failed') {
                            $('#pp_' + pid).remove();

                            var dataSumProducts = $('#sumProducts').text();
                            var dataSumAll = $('#sumAll').text();
                            var dataSumShipping = $('#sumShipping').text();

                            var sProducts = parseFloat(dataSumProducts.replace(',','.')) - parseFloat(data1.sumProducts);
                            var sAll = parseFloat(dataSumAll.replace(',', '.')) - parseFloat(data1.sumAll);
                            var aShipping = parseFloat(dataSumShipping.replace(',', '.')) - parseFloat(data1.sumShipping);


                            var count = parseInt($('#cart').text());
                            $('#cart').text(parseInt(count) - parseInt(data1.delCount));

                            if((parseInt(count) - parseInt(data1.delCount)) === 0) {
                                var sShipping = 0.00;
                            } else {
                                var sShipping = parseFloat(aShipping);
                            }

                            var s = parseFloat(sAll);

                            var products = {};
                            products.dataSumProducts = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sProducts);
                            products.dataSumShipping = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sShipping);
                            products.dataSumAll = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(s);

                            $('#sumShipping').text(products.dataSumShipping);
                            $('#sumAll').text(products.dataSumAll);
                            $('#sumProducts').text(products.dataSumProducts);

                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_cartDelete_alert_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });
                        } else {
                            $mdToast.show({
                                theme: 'error-toast',
                                hideDelay: 3000,
                                position: 'top',
                                controller: 'ToastCtrl',
                                templateUrl: 'views/toasts/toast_cartDelete_alert_0.html',
                                toastClass: 'md-error-toast-theme'
                            });
                            $scope.cartMessage = data1.data;
                        }

                        $scope.cartLoader = false;
                    });
                }
            };

            $scope.checkoutMember = function() {
                var stkService = stkHttpService.checkCheckout();
                stkService.then(function(data1) {
                    if(data1.data === 'ok') {
                        $window.location.href = 'https://dreams.dreambeem.com?checkout=true';
                    } else {
                        $window.location.href = 'https://www.dreambeem.com/dreamlogin';
                    }
                });
            };

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };
        }

        $scope.openCart = function(ev, kind, pid) {
            $rootScope.pid = pid;
            $scope.showAdvanced(ev, kind, pid);

        };

        $scope.initDreambeemHeader = function() {
            var stkService = stkHttpService.getCartCount();
            stkService.then(function(data1) {
                if(data1) {
                    $scope.cartNumber = data1.data.count;
                }
            });
        };

        $scope.openMenu = function($mdMenu, ev) {
            var originatorEv;

            $mdMenu.open(ev);
        };

        $scope.checkIfCookiesAreEnabled = function() {
            var cookieEnabled = $window.navigator.cookieEnabled;
            if (!cookieEnabled){
                $document.cookie = "dreambeem_CT";
                cookieEnabled = ($document.cookie.indexOf("dreambeem_CT") == -1) ? true : false;
            }

            if(!cookieEnabled) {
                showError(null, '', 'Diese App benötigt Cookies. Cookies bitte im Browser anstellen.');
            }
        };

        function showError(ev, social, m) {
            if(social === 'fb') {
                var message = 'Sie haben eine zu hohe Facebook - Reichweite gewählt!';
            } else if(social === 'tw') {
                var message = 'Sie haben eine zu hohe Twitter - Reichweite gewählt!';
            } else {
                var message = m;
            }

            var confirm = $mdDialog.alert()
                .title('Es ist ein Fehler aufgetreten!')
                .textContent(message)
                .targetEvent(ev)
                .ok('Ok!');

            $mdDialog.show(confirm).then(function () {
            }, function () {
            });
        };
    });



angular.module('dreambeemcomApp')
    .controller('BeemlineCtrl', function ($scope, $timeout, $mdToast, $mdSidenav, $http, stkHttpService, stkMetaService , $rootScope, $interval, $compile,  $mdDialog, Facebook, $window, $location) {
        $scope.beemlineShow = false;

        $scope.url1 = $location.path();
        var search = '';

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            if(completeUrl[2] === 'search') {
                var search = completeUrl[3];
                $scope.h1 = 'Suche - ' + decodeURI(search);
            } else {
                var catid = completeUrl[3];
                if(completeUrl[2]) {
                    var category = decodeURI(completeUrl[2]);
                } else {
                    var category = 'Suche';
                }

                $scope.h1 = category;
            }
        }

        stkMetaService.setTitle('Dreambeem.com - ' + $scope.h1);

        $scope.count = 0;

        $scope.getBeems = function() {
            var qua = 0;
            var options = {
                lang: 'de',
                maintainCase: true,
                separator: '-'
            };

            var getSlug = createSlug(options);

            if (search) {
                var iindex = 0;
                qua = iindex * 16;
                iindex = iindex + 1;
                $scope.counter = 21;

                $scope.promiseIntervalBase = $interval(function(){ if(parseInt($scope.counter) > 0) { $scope.counter--; } },1000,0);
                var stkService = stkHttpService.getBeemlineSearch(search,qua);
                stkService.then(function (data) {
                    if (data) {
                        $scope.count = $scope.count + data.data.length;
                        if (data.data.length > 0) {
                            for (var index = 0; index < data.data.length; index++) {
                                if(data.seo) {
                                    if(data.seo.length > 0) {
                                        $scope.seoText = data.seo;
                                        stkMetaService.setDescription($scope.seoText.substr(0,139));
                                        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                        $rootScope.ogDescription = $scope.seoText.substr(0,139);
                                        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                        $rootScope.ogType = 'website';
                                        $rootScope.ogUrl = $location.absUrl();
                                    } else {
                                        stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                        $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                        $rootScope.ogType = 'website';
                                        $rootScope.ogUrl = $location.absUrl();
                                    }
                                } else {
                                    stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                    $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                    $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                    $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                    $rootScope.ogType = 'website';
                                    $rootScope.ogUrl = $location.absUrl();
                                }

                                $scope.beemlineShow = false;
                                for(var jindex = 0; jindex < data.data.length; jindex++) {
                                    if(data.data[jindex][0].selling_price && data.data[jindex][0].title) {
                                        var title = getSlug(data.data[jindex][0].title, options);
                                        data.data[jindex][0].titleN = title;

                                        data.data[jindex][0].s_price = data.data[jindex][0].selling_price.replace('.',',');
                                    }
                                }
                                var div = '<div id="Beemline_' + data.data[index][0].id + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;">' +
                                    '<div class="clearfix"></div>' +
                                    '<a style="text-decoration: none; color: #000000;" class="beemline-link" href="https://www.dreambeem.com/' + data.data[index][0].titleN + '/' + data.data[index][0].productId + '/' + data.data[index][0].shopId + '">' +
                                    '<h3><strong>' + data.data[index][0].title + '</strong></h3>' +
                                    '<img alt="' + data.data[index][0].titleN + '" title="' + data.data[index][0].titleN + '" width="290" src="' + data.data[index][0].main_image + '">' +
                                    '<span>' + data.data[index][0].description + '</span>' +
                                    '<md-divider></md-divider>' +
                                    '<span class="m-t">Richtpreis: <strong>' + data.data[index][0].s_price + ' €</strong></span>' +
                                    '</a>' +
                                    '<md-button ng-controller="MainCtrl" ng-click="addProduct2Cart(' + data.data[index][0].productId + ',' + data.data[index][0].shopId + ');" class="md-button md-raised md-warn">In den Warenkorb</md-button>';

                                var el = document.getElementById('beemline');

                                angular.element(el).append($compile(div)($scope));

                                $('#Beemline_' + data.data[index][0].id).fadeIn(3500, "swing");
                                $scope.beemlineShow = true;

                            }
                        } else {
                            $scope.searchMessage = 'Keine Produkte gefunden.';
                        }
                    } else {
                        $scope.searchMessage = 'Keine Produkte gefunden.';
                    }

                    var tindex = 0;
                    var uindex = 0;

                    $interval(function () {
                        qua = iindex * 16;
                        iindex = iindex + 1;

                        var stkService = stkHttpService.getBeemlineSearch(search,qua);
                        stkService.then(function (data) {
                            if(data) {
                                if (data.data.length > 0) {
                                    $scope.count = $scope.count + data.data.length;
                                    $interval.cancel($scope.promiseIntervalBase);
                                    $interval.cancel($scope.promiseIntervalFinal);
                                    $scope.counter = 21;
                                    $scope.promiseIntervalFinal = $interval(function() {
                                            if(parseInt($scope.counter) > 0) { $scope.counter--; } },
                                        1000,0);

                                    for (var index = 0; index < data.data.length; index++) {

                                        if (data.data.length > 0) {
                                            if(data.seo) {
                                                if(data.seo.length > 0) {
                                                    $scope.seoText = data.seo;
                                                    stkMetaService.setDescription($scope.seoText.substr(0,139));
                                                    $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                                    $rootScope.ogDescription = $scope.seoText.substr(0,139);
                                                    $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                                    $rootScope.ogType = 'website';
                                                    $rootScope.ogUrl = $location.absUrl();
                                                } else {
                                                    stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                                    $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                                    $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                                    $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                                    $rootScope.ogType = 'website';
                                                    $rootScope.ogUrl = $location.absUrl();
                                                }
                                            } else {
                                                stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                                $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                                $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                                $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                                $rootScope.ogType = 'website';
                                                $rootScope.ogUrl = $location.absUrl();
                                            }

                                            $scope.beemlineShow = false;
                                            for(var jindex = 0; jindex < data.data.length; jindex++) {
                                                if(data.data[jindex][0].selling_price && data.data[jindex][0].title) {
                                                    var title = getSlug(data.data[jindex][0].title, options);
                                                    data.data[jindex][0].titleN = title;

                                                    data.data[jindex][0].s_price = data.data[jindex][0].selling_price.replace('.',',');
                                                }
                                            }

                                            uindex = (parseInt(qua) + parseInt(index));

                                            var div = '<div id="cBeemline_' + uindex + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;">' +
                                                '<div class="clearfix"></div>' +
                                                '<a style="text-decoration: none; color: #000000;" class="beemline-link" href="https://www.dreambeem.com/' + data.data[index][0].titleN + '/' + data.data[index][0].productId + '/' + data.data[index][0].shopId + '">' +
                                                '<h3><strong>' + data.data[index][0].title + '</strong></h3>' +
                                                '<img alt="' + data.data[index][0].titleN + '" title="' + data.data[index][0].titleN + '" width="290" src="' + data.data[index][0].main_image + '">' +
                                                '<span>' + data.data[index][0].description + '</span>' +
                                                '<md-divider></md-divider>' +
                                                '<span class="m-t">Richtpreis: <strong>' + data.data[index][0].s_price + ' €</strong></span>' +
                                                '</a>' +
                                                '<md-button ng-controller="MainCtrl" ng-click="addProduct2Cart(' + data.data[index][0].productId + ',' + data.data[index][0].shopId + ');" class="md-button md-raised md-warn">In den Warenkorb</md-button></div>';

                                            var el = document.getElementById('beemline');

                                            angular.element(el).append($compile(div)($scope));

                                            $('#cBeemline_' + uindex).fadeIn(3500, "swing");
                                            $scope.beemlineShow = true;
                                        }
                                    }

                                    tindex = tindex + 16;
                                } else {
                                    $scope.counter = 0;
                                    $interval.cancel($scope.promiseIntervalBase);
                                    $interval.cancel($scope.promiseIntervalFinal);
                                }
                            } else {
                                $scope.searchMessage = 'Keine Produkte gefunden.';
                            }
                        });
                    }, 20000);
                });
            } else if(catid){

                var iindex = 0;
                qua = iindex * 16;
                iindex = iindex + 1;

                $scope.counter = 21;
                $scope.promiseIntervalCBase = $interval(function(){ if(parseInt($scope.counter) > 0) { $scope.counter--; } },1000,0);
                var stkService = stkHttpService.getBeemline(catid,qua);
                stkService.then(function (data) {
                    if (data) {
                        if(data.data.length > 0) {
                            $scope.count = $scope.count + data.data.length;
                            for (var index = 0; index < data.data.length; index++) {
                                if (data.data.length > 0) {
                                    $scope.beemlineShow = false;
                                    if(data.seo) {
                                        if(data.seo.length > 0) {
                                            $scope.seoText = data.seo;
                                            stkMetaService.setDescription($scope.seoText.substr(0,139));
                                            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                            $rootScope.ogDescription = $scope.seoText.substr(0,139);
                                            $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                            $rootScope.ogType = 'website';
                                            $rootScope.ogUrl = $location.absUrl();
                                        } else {
                                            stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                            $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                            $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                            $rootScope.ogType = 'website';
                                            $rootScope.ogUrl = $location.absUrl();
                                        }
                                    } else {
                                        stkMetaService.setDescription(data.data[index][0].description.substr(0,139));
                                        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                        $rootScope.ogDescription = data.data[index][0].description.substr(0,139);
                                        $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                        $rootScope.ogType = 'website';
                                        $rootScope.ogUrl = $location.absUrl();
                                    }

                                    for (var jindex = 0; jindex < data.data.length; jindex++) {
                                        if (data.data[jindex][0].selling_price && data.data[jindex][0].title) {
                                            var title = getSlug(data.data[jindex][0].title, options);
                                            data.data[jindex][0].titleN = title;

                                            data.data[jindex][0].s_price = data.data[jindex][0].selling_price.replace('.',',');
                                        }
                                    }
                                    var div = '<div id="Beemline_' + data.data[index][0].id + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;">' +
                                        '<div class="clearfix"></div>' +
                                        '<a style="text-decoration: none; color: #000000;" class="beemline-link" href="https://www.dreambeem.com/' + data.data[index][0].titleN + '/' + data.data[index][0].productId + '/' + data.data[index][0].shopId + '">' +
                                        '<h3><strong>' + data.data[index][0].title + '</strong></h3>' +
                                        '<img alt="' + data.data[index][0].titleN + '" title="' + data.data[index][0].titleN + '" width="290" src="' + data.data[index][0].main_image + '">' +
                                        '<span>' + data.data[index][0].description + '</span>' +
                                        '<md-divider></md-divider>' +
                                        '<span class="m-t">Richtpreis: <strong>' + data.data[index][0].s_price + ' €</strong></span>' +
                                        '</a>' +
                                        '<md-button ng-controller="MainCtrl" ng-click="addProduct2Cart(' + data.data[index][0].productId + ',' + data.data[index][0].shopId + ');" class="md-button md-raised md-warn">In den Warenkorb</md-button>';

                                    var el = document.getElementById('beemline');

                                    angular.element(el).append($compile(div)($scope));

                                    $('#Beemline_' + data.data[index][0].id).fadeIn(3500, "swing");
                                    $scope.beemlineShow = true;
                                }
                            }
                        } else {
                            $scope.counter = 0;
                            $interval.cancel($scope.promiseIntervalCBase);
                            $interval.cancel($scope.promiseIntervalCFinal);
                        }
                    }
                });

                $interval(function () {
                    qua = iindex * 16;
                    iindex = iindex + 1;
                    var stkService = stkHttpService.getBeemline(catid, qua);
                    stkService.then(function (data12) {
                        if (data12) {
                            if(data12.data.length > 0) {
                                $scope.count = $scope.count + data12.data.length;
                                $interval.cancel($scope.promiseIntervalCBase);
                                $interval.cancel($scope.promiseIntervalCFinal);
                                $scope.counter = 21;
                                $scope.promiseIntervalCFinal = $interval(function () {
                                    if(parseInt($scope.counter) > 0) { $scope.counter--; }
                                }, 1000, 0);

                                for (var index1 = 0; index1 < data12.data.length; index1++) {
                                    if (data12.data.length > 0) {
                                        if(data12.seo) {
                                            if(data12.seo.length > 0) {
                                                $scope.seoText = data12.seo;
                                                stkMetaService.setDescription($scope.seoText.substr(0,139));
                                                $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                                $rootScope.ogDescription = $scope.seoText.substr(0,139);
                                                $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                                $rootScope.ogType = 'website';
                                                $rootScope.ogUrl = $location.absUrl();
                                            } else {
                                                stkMetaService.setDescription(data12.data[index][0].description.substr(0,139));
                                                $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                                $rootScope.ogDescription = data12.data[index][0].description.substr(0,139);
                                                $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                                $rootScope.ogType = 'website';
                                                $rootScope.ogUrl = $location.absUrl();
                                            }
                                        } else {
                                            stkMetaService.setDescription(data12.data[index][0].description.substr(0,139));
                                            $rootScope.ogTitle = 'Dreambeem.com - Power Market | Dream - Login';
                                            $rootScope.ogDescription = data12.data[index][0].description.substr(0,139);
                                            $rootScope.ogImage =  'https://www.dreambeem.com/images/agbevents_site.jpg';
                                            $rootScope.ogType = 'website';
                                            $rootScope.ogUrl = $location.absUrl();
                                        }
                                        $scope.beemlineShow = false;
                                        for (var jindex = 0; jindex < data12.data.length; jindex++) {
                                            if (data12.data[jindex][0].selling_price && data12.data[jindex][0].title) {
                                                var title = getSlug(data12.data[jindex][0].title, options);
                                                data12.data[jindex][0].titleN = title;

                                                data12.data[jindex][0].s_price = data12.data[jindex][0].selling_price.replace('.',',');
                                            }
                                        }

                                        var div = '<div id="cBeemline_' + data12.data[index1][0].id + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;">' +
                                            '<div class="clearfix"></div>' +
                                            '<a style="text-decoration: none; color: #000000;" class="beemline-link" href="https://www.dreambeem.com/' + data12.data[index1][0].titleN + '/' + data12.data[index1][0].productId + '/' + data12.data[index1][0].shopId + '">' +
                                            '<h3><strong>' + data12.data[index1][0].title + '</strong></h3>' +
                                            '<img alt="' + data12.data[index1][0].titleN + '" title="' + data12.data[index1][0].titleN + '" width="290" src="' + data12.data[index1][0].main_image + '">' +
                                            '<span>' + data12.data[index1][0].description + '</span>' +
                                            '<md-divider></md-divider>' +
                                            '<span class="m-t">Richtpreis: <strong>' + data12.data[index1][0].s_price + ' €</strong></span>' +
                                            '</a>' +
                                            '<md-button ng-controller="MainCtrl" ng-click="addProduct2Cart(' + data12.data[index1][0].productId + ',' + data12.data[index1][0].shopId + ');" class="md-button md-raised md-warn">In den Warenkorb</md-button>';

                                        var el = document.getElementById('beemline');

                                        angular.element(el).append($compile(div)($scope));

                                        $('#cBeemline_' + data12.data[index1][0].id).fadeIn(3500, "swing");
                                        $scope.beemlineShow = true;
                                    }
                                }
                            } else {
                                $scope.counter = 0;
                                $interval.cancel($scope.promiseIntervalCBase);
                                $interval.cancel($scope.promiseIntervalCFinal);
                            }
                        }
                    });
                }, 20000);
            }
        };

        $scope.loadCategory = function(catid,category) {
            if(catid && category) {
                var c = encodeURI(category);
                $window.location.href = 'https://www.dreambeem.com/beemline/' + c + '/' + catid + '/';
            }
        };

        $scope.submitSearch = function(isValid,search) {
            if (isValid && search !== undefined) {
                $window.location.href = 'https://www.dreambeem.com/beemline/search/' + encodeURI(search);
            }
        };

        $scope.submitBeemlineConfig = function(isValid, search) {
            $scope.loading = true;
            if (isValid) {
                if(search.length == 0) {
                    $mdToast.show({
                        theme       : 'error-toast',
                        hideDelay   : 3000,
                        position    : 'top',
                        controller  : 'ToastCtrl',
                        templateUrl : 'views/toasts/toast_beemlineconfig_0_alert.html',
                        toastClass  : 'md-success-toast-theme'
                    });
                } else {
                    var cs = search.join('|');

                    var stkService = stkHttpService.postBeemlineConfig(cs);
                    stkService.then(function(data) {
                        $scope.response = data;
                        $scope.h1 = category + ' - ' + chips;

                    });

                    $mdToast.show({
                        theme       : 'success-toast',
                        hideDelay   : 3000,
                        position    : 'top',
                        controller  : 'ToastCtrl',
                        templateUrl : 'views/toasts/toast_beemlineconfig_1_alert.html',
                        toastClass  : 'md-success-toast-theme'
                    });
                }
            }

            $scope.loading = false;
        };

        $scope.openCart = function(ev, kind, pid) {
            $rootScope.pid = pid;
            $scope.showAdvanced(ev, kind, pid);

        };

    });

angular.module('dreambeemcomApp')
    .controller('404Ctrl', function ($scope, $document, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - 404 Seite nicht gefunden');
        stkMetaService.setDescription('Dreambeem.com - Power Market | Seite nicht gefunden 404');
        stkStatusCodeService.setStatusCode('404');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | 404 Seite nicht gefunden';
        $rootScope.ogDescription = 'Dreambeem.com - Power Market | Seite nicht gefunden 404';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/start3.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('ContactCtrl', function ($scope, $location, $rootScope ,stkHttpService, $mdToast, stkMetaService) {
        stkMetaService.setTitle('Dreambeem.com - Power Market | Kontakt');
        stkMetaService.setDescription('Hier findest Du das Kontaktformular von Dreambeem.com. Informationen bzw. Auszahlungsanfragen werden hier abgesetzt.');

        $rootScope.ogTitle = 'Dreambeem.com - Power Market | Kontakt';
        $rootScope.ogDescription = 'Hier findest Du das Kontaktformular von Dreambeem.com. Informationen bzw. Auszahlungsanfragen werden hier abgesetzt.';
        $rootScope.ogImage =  'https://www.dreambeem.com/images/contact_site.png';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();

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

angular.module('dreambeemcomApp')
    .controller('DreamProductsCtrl', function ($scope, $location, stkHttpService, stkMetaService, $window) {

        var cid = $location.search().cid2;
        $scope.cid2 = cid;
        var cid1 = $location.search().cid3;
        $scope.cid3 = cid1;
        var cid2 = $location.search().cid4;
        $scope.cid4 = cid2;
        var cid3 = $location.search().cid5;
        $scope.cid5 = cid3;
        var cid4 = $location.search().cid6;
        $scope.cid6 = cid4;
        var page = $location.search().p;
        $scope.page = parseInt(page);

        if(cid) {
            var stkService = stkHttpService.getCategoryPage(cid);
            stkService.then(function(data) {

                $scope.categoryPages = data.data;

                var options = {
                    lang: 'de',
                    maintainCase: true,
                    separator: '-'
                };

                var getSlug = createSlug(options);

                for(var index = 0; index < $scope.categoryPages.length; index++) {
                    if($scope.categoryPages[index].categoryLayer3Name) {
                        var title = getSlug($scope.categoryPages[index].categoryLayer3Name, options);
                        $scope.categoryPages[index].categoryLayer3NameNew = title;
                    }
                }

                var stkService = stkHttpService.getCategoryHeader(cid);
                stkService.then(function(data1) {
                    $scope.categoryHeaderNew = getSlug(data1.data, options);
                    $scope.categoryHeader = data1.data;

                    stkMetaService.setTitle('Dreambeem.com - Power Market | ' + $scope.categoryHeader + '');
                });

                $scope.startPage = false;
                $scope.categoryPageShow = true;
                $scope.categoryParameter = 'cid3';
                $scope.layer3 = true;
                $scope.layer4 = false;
                $scope.layer5 = false;
                $scope.layer6 = false;
                $scope.layer7 = false;

                $scope.sloading = true;
                var stkService = stkHttpService.getCategoryProducts1(cid,2,page);
                stkService.then(function(data2) {

                    $scope.categoryProducts = data2.data;
                    $scope.count = data2.count;
                    $scope.seoData = data2.seoData;

                    for(var index = 0; index < $scope.categoryProducts.length; index++) {

                        var title = getSlug($scope.categoryProducts[index].title, options);
                        $scope.categoryProducts[index].titleNew = title;
                    }

                    if(!$scope.categoryProducts) {
                        $scope.categoryProductMessage = 'Keine Produkte gefunden!';
                    }

                    $scope.pageNumber = 1;
                    $scope.possiblePages = Math.floor(parseInt($scope.count) / 16);

                    if($scope.page == 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: parseInt(page)},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)},
                            { pageN: (parseInt(page) + 4)}
                        ];
                    } else if($scope.page == 2 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)}
                        ];
                    } else if($scope.page == 3 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) + 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == (parseInt($scope.page) + 2) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == 0) {
                        var pages = [
                            { },
                        ];
                    } else if($scope.possiblePages == 1) {
                        var pages = [
                            { pageN: (parseInt(page))},
                        ];
                    } else if($scope.possiblePages == 2) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == 3) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.count == 0) {
                        var pages = [
                            { }
                        ];
                    } else {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    }

                    $scope.pages = pages;
                    $scope.pageNumber = parseInt($scope.page);

                    $scope.sloading = false;
                });
            });
        } else if(cid1) {
            var stkService = stkHttpService.getCategoryPage4(cid1);
            stkService.then(function(data) {

                $scope.categoryPages = data.data;

                var options = {
                    lang: 'de',
                    maintainCase: true,
                    separator: '-'
                };

                var getSlug = createSlug(options);

                for(var index = 0; index < $scope.categoryPages.length; index++) {
                    if($scope.categoryPages[index].categoryLayer4Name) {
                        var title = getSlug($scope.categoryPages[index].categoryLayer4Name, options);
                        $scope.categoryPages[index].categoryLayer4NameNew = title;
                    }
                }

                var stkService = stkHttpService.getCategoryHeader3(cid1);
                stkService.then(function(data1) {
                    $scope.categoryHeaderNew = getSlug(data1.data, options);
                    $scope.categoryHeader = data1.data;

                    stkMetaService.setTitle('Dreambeem.com - Power Market | ' + $scope.categoryHeader + '');
                });

                $scope.startPage = false;
                $scope.categoryPageShow = true;
                $scope.categoryParameter = 'cid4';
                $scope.layer3 = false;
                $scope.layer4 = true;
                $scope.layer5 = false;
                $scope.layer6 = false;
                $scope.layer7 = false;

                $scope.sloading = true;
                var stkService = stkHttpService.getCategoryProducts1(cid1,3,page);
                stkService.then(function(data2) {
                    $scope.categoryProducts = data2.data;
                    $scope.count = data2.count;
                    $scope.seoData = data2.seoData;

                    for(var index = 0; index < $scope.categoryProducts.length; index++) {
                        if($scope.categoryProducts[index].title) {
                            var title = getSlug($scope.categoryProducts[index].title, options);
                            $scope.categoryProducts[index].titleNew = title;
                        }
                    }

                    if(!$scope.categoryProducts) {
                        $scope.categoryProductMessage = 'Keine Produkte gefunden!';
                    }

                    $scope.pageNumber = 1;
                    $scope.possiblePages = Math.floor(parseInt($scope.count) / 16);

                    if($scope.page == 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: parseInt(page)},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)},
                            { pageN: (parseInt(page) + 4)}
                        ];
                    } else if($scope.page == 2 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)}
                        ];
                    } else if($scope.page == 3 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) + 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == (parseInt($scope.page) + 2) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == 0) {
                        var pages = [
                            { },
                        ];
                    } else if($scope.possiblePages == 1) {
                        var pages = [
                            { pageN: (parseInt(page))},
                        ];
                    } else if($scope.possiblePages == 2) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == 3) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.count == 0) {
                        var pages = [
                            { }
                        ];
                    } else {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    }

                    $scope.pages = pages;
                    $scope.pageNumber = parseInt($scope.page);

                    $scope.sloading = false;
                });
            });
        } else if(cid2) {
            var stkService = stkHttpService.getCategoryPage5(cid2);
            stkService.then(function(data) {

                $scope.categoryPages = data.data;

                var options = {
                    lang: 'de',
                    maintainCase: true,
                    separator: '-'
                };

                var getSlug = createSlug(options);

                for(var index = 0; index < $scope.categoryPages.length; index++) {

                    var title = getSlug($scope.categoryPages[index].categoryLayer5Name, options);
                    $scope.categoryPages[index].categoryLayer5NameNew = title;
                }

                var stkService = stkHttpService.getCategoryHeader4(cid2);
                stkService.then(function(data1) {
                    $scope.categoryHeaderNew = getSlug(data1.data, options);
                    $scope.categoryHeader = data1.data;

                    stkMetaService.setTitle('Dreambeem.com - Power Market | ' + $scope.categoryHeader + '');
                });

                $scope.startPage = false;
                $scope.categoryPageShow = true;
                $scope.categoryParameter = 'cid5';
                $scope.layer3 = false;
                $scope.layer4 = false;
                $scope.layer5 = true;
                $scope.layer6 = false;
                $scope.layer7 = false;

                $scope.sloading = true;
                var stkService = stkHttpService.getCategoryProducts1(cid2,4,page);
                stkService.then(function(data2) {
                    $scope.categoryProducts = data2.data;
                    $scope.count = data2.count;
                    $scope.seoData = data2.seoData;

                    for(var index = 0; index < $scope.categoryProducts.length; index++) {

                        var title = getSlug($scope.categoryProducts[index].title, options);
                        $scope.categoryProducts[index].titleNew = title;
                    }

                    if(!$scope.categoryProducts) {
                        $scope.categoryProductMessage = 'Keine Produkte gefunden!';
                    }

                    $scope.pageNumber = 1;
                    $scope.possiblePages = Math.floor(parseInt($scope.count) / 16);

                    if($scope.page == 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: parseInt(page)},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)},
                            { pageN: (parseInt(page) + 4)}
                        ];
                    } else if($scope.page == 2 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)}
                        ];
                    } else if($scope.page == 3 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) + 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == (parseInt($scope.page) + 2) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == 0) {
                        var pages = [
                            { },
                        ];
                    } else if($scope.possiblePages == 1) {
                        var pages = [
                            { pageN: (parseInt(page))},
                        ];
                    } else if($scope.possiblePages == 2) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == 3) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.count == 0) {
                        var pages = [
                            { }
                        ];
                    } else {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    }

                    $scope.pages = pages;
                    $scope.pageNumber = parseInt($scope.page);

                    $scope.sloading = false;
                });
            });
        } else if(cid3) {
            var stkService = stkHttpService.getCategoryPage6(cid3);
            stkService.then(function(data) {

                $scope.categoryPages = data.data;

                var options = {
                    lang: 'de',
                    maintainCase: true,
                    separator: '-'
                };

                var getSlug = createSlug(options);

                for(var index = 0; index < $scope.categoryPages.length; index++) {

                    var title = getSlug($scope.categoryPages[index].categoryLayer6Name, options);
                    $scope.categoryPages[index].categoryLayer6NameNew = title;
                }

                var stkService = stkHttpService.getCategoryHeader5(cid3);
                stkService.then(function(data1) {
                    $scope.categoryHeaderNew = getSlug(data1.data, options);
                    $scope.categoryHeader = data1.data;

                    stkMetaService.setTitle('Dreambeem.com - Power Market | ' + $scope.categoryHeader + '');
                });

                $scope.startPage = false;
                $scope.categoryPageShow = true;
                $scope.categoryParameter = 'cid6';
                $scope.layer3 = false;
                $scope.layer4 = false;
                $scope.layer5 = false;
                $scope.layer6 = true;
                $scope.layer7 = false;

                $scope.sloading = true;
                var stkService = stkHttpService.getCategoryProducts1(cid3,5,page);
                stkService.then(function(data2) {
                    $scope.categoryProducts = data2.data;
                    $scope.count = data2.count;
                    $scope.seoData = data2.seoData;

                    for(var index = 0; index < $scope.categoryProducts.length; index++) {

                        var title = getSlug($scope.categoryProducts[index].title, options);
                        $scope.categoryProducts[index].titleNew = title;
                    }

                    if(!$scope.categoryProducts) {
                        $scope.categoryProductMessage = 'Keine Produkte gefunden!';
                    }

                    $scope.pageNumber = 1;
                    $scope.possiblePages = Math.floor(parseInt($scope.count) / 16);

                    if($scope.page == 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: parseInt(page)},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)},
                            { pageN: (parseInt(page) + 4)}
                        ];
                    } else if($scope.page == 2 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)}
                        ];
                    } else if($scope.page == 3 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) + 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == (parseInt($scope.page) + 2) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == 0) {
                        var pages = [
                            { },
                        ];
                    } else if($scope.possiblePages == 1) {
                        var pages = [
                            { pageN: (parseInt(page))},
                        ];
                    } else if($scope.possiblePages == 2) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == 3) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.count == 0) {
                        var pages = [
                            { }
                        ];
                    } else {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    }

                    $scope.pages = pages;
                    $scope.pageNumber = parseInt($scope.page);

                    $scope.sloading = false;
                });
            });
        } else if(cid4) {
            var stkService = stkHttpService.getCategoryPage7(cid4);
            stkService.then(function(data) {

                $scope.categoryPages = data.data;

                var options = {
                    lang: 'de',
                    maintainCase: true,
                    separator: '-'
                };

                var getSlug = createSlug(options);

                for(var index = 0; index < $scope.categoryPages.length; index++) {

                    var title = getSlug($scope.categoryPages[index].categoryLayer7Name, options);
                    $scope.categoryPages[index].categoryLayer7NameNew = title;
                }

                var stkService = stkHttpService.getCategoryHeader6(cid4);
                stkService.then(function(data1) {
                    $scope.categoryHeaderNew = getSlug(data1.data, options);
                    $scope.categoryHeader = data1.data;

                    stkMetaService.setTitle('Dreambeem.com - Power Market | ' + $scope.categoryHeader + '');
                });

                $scope.startPage = false;
                $scope.categoryPageShow = true;
                $scope.categoryParameter = 'cid7';
                $scope.layer3 = false;
                $scope.layer4 = false;
                $scope.layer5 = false;
                $scope.layer6 = false;
                $scope.layer7 = true;

                $scope.sloading = true;
                var stkService = stkHttpService.getCategoryProducts1(cid4,6,page);
                stkService.then(function(data2) {
                    $scope.categoryProducts = data2.data;
                    $scope.count = data2.count;
                    $scope.seoData = data2.seoData;

                    for(var index = 0; index < $scope.categoryProducts.length; index++) {

                        var title = getSlug($scope.categoryProducts[index].title, options);
                        $scope.categoryProducts[index].titleNew = title;
                    }

                    if(!$scope.categoryProducts) {
                        $scope.categoryProductMessage = 'Keine Produkte gefunden!';
                    }

                    $scope.pageNumber = 1;
                    $scope.possiblePages = Math.floor(parseInt($scope.count) / 16);

                    if($scope.page == 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: parseInt(page)},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)},
                            { pageN: (parseInt(page) + 4)}
                        ];
                    } else if($scope.page == 2 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)},
                            { pageN: (parseInt(page) + 3)}
                        ];
                    } else if($scope.page == 3 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))}
                        ];
                    } else if($scope.possiblePages == parseInt($scope.page) + 1 && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == (parseInt($scope.page) + 2) && $scope.possiblePages > 4) {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.possiblePages == 0) {
                        var pages = [
                            { },
                        ];
                    } else if($scope.possiblePages == 1) {
                        var pages = [
                            { pageN: (parseInt(page))},
                        ];
                    } else if($scope.possiblePages == 2) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)}
                        ];
                    } else if($scope.possiblePages == 3) {
                        var pages = [
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    } else if($scope.count == 0) {
                        var pages = [
                            { }
                        ];
                    } else {
                        var pages = [
                            { pageN: (parseInt(page) - 2)},
                            { pageN: (parseInt(page) - 1)},
                            { pageN: (parseInt(page))},
                            { pageN: (parseInt(page) + 1)},
                            { pageN: (parseInt(page) + 2)}
                        ];
                    }

                    $scope.pages = pages;
                    $scope.pageNumber = parseInt($scope.page);

                    $scope.sloading = false;
                });
            });
        } else if($location.path() === '/dream-products') {
            var stkService = stkHttpService.getDreamProducts();
            stkService.then(function (data) {
                $scope.startPage = true;
                $scope.dreamCategories = data.dreamProductsCategoriesIds;
                $scope.loading = false;
            });
        } else {
            $window.location.href = 'https://www.dreambeem.com/404/'
        }
    });

angular.module('dreambeemcomApp')
    .controller('SearchCtrl', function ($scope, $location, $window, $routeParams, stkHttpService, stkMetaService, $rootScope) {
        $scope.isCurrentPage = function(page, pageNumber) {
            if(page == pageNumber) {
                return true;
            } else {
                return false;
            }
        };

        $scope.initSearchResult = function() {
            $scope.loading = true;
            var pCount = 0;
            var query = $location.search().query;

            $window.document.title = 'Dreambeem.com - Power Market | "'+query+'"';

            var page = $location.search().page;

            var options = {
                lang: 'de',
                maintainCase: true,
                separator: '-'
            };

            var getSlug = createSlug(options);

            var stkService = stkHttpService.searchCount(query);
            stkService.then(function(data) {
                $scope.productsCount = data;
                $scope.loading = false;

                $scope.pagesCount = Math.ceil((parseInt($scope.productsCount[0].dCount) / 20));
                pCount = Math.ceil((parseInt($scope.productsCount[0].dCount) / 20));
                if(page == 1 && pCount >= 5) {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' },
                        { page: 2, link: '/search?query='+query+'&page=2' },
                        { page: 3, link: '/search?query='+query+'&page=3' },
                        { page: 4, link: '/search?query='+query+'&page=4' },
                        { page: 5, link: '/search?query='+query+'&page=5' }
                    ];

                    $scope.pages = pages;
                } else if(pCount == 1) {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' }
                    ];

                    $scope.pages = pages;
                } else if(pCount == 2) {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' },
                        { page: 2, link: '/search?query='+query+'&page=2' },
                    ];

                    $scope.pages = pages;
                } else if(pCount == 3) {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' },
                        { page: 2, link: '/search?query='+query+'&page=2' },
                        { page: 3, link: '/search?query='+query+'&page=3' }
                    ];

                    $scope.pages = pages;
                } else if(pCount == 4) {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' },
                        { page: 2, link: '/search?query='+query+'&page=2' },
                        { page: 3, link: '/search?query='+query+'&page=3' },
                        { page: 4, link: '/search?query='+query+'&page=4' }
                    ];

                    $scope.pages = pages;
                } else if(page > 3 && pCount >= 5) {
                    if(parseInt(pCount) == (parseInt(page)+1)){
                        var pages = [
                            { page: (parseInt(page)-2), link: '/search?query='+query+'&page='+(parseInt(page)-2) },
                            { page: (parseInt(page)-1), link: '/search?query='+query+'&page='+(parseInt(page)-1) },
                            { page: (parseInt(page)), link: '/search?query='+query+'&page='+(parseInt(page)) },
                            { page: (parseInt(page)+1), link: '/search?query='+query+'&page='+(parseInt(page)+1) },
                        ];
                    } else if(parseInt(pCount) > parseInt(page)) {
                        var pages = [
                            { page: (parseInt(page)-2), link: '/search?query='+query+'&page='+(parseInt(page)-2) },
                            { page: (parseInt(page)-1), link: '/search?query='+query+'&page='+(parseInt(page)-1) },
                            { page: (parseInt(page)), link: '/search?query='+query+'&page='+(parseInt(page)) },
                            { page: (parseInt(page)+1), link: '/search?query='+query+'&page='+(parseInt(page)+1) },
                            { page: (parseInt(page)+2), link: '/search?query='+query+'&page='+(parseInt(page)+2) }
                        ];
                    } else if(parseInt(pCount) == parseInt(page)) {
                        var pages = [
                            { page: (parseInt(page)-2), link: '/search?query='+query+'&page='+(parseInt(page)-2) },
                            { page: (parseInt(page)-1), link: '/search?query='+query+'&page='+(parseInt(page)-1) },
                            { page: (parseInt(page)), link: '/search?query='+query+'&page='+(parseInt(page)) },
                        ];
                    }


                    $scope.pages = pages;
                } else {
                    var pages = [
                        { page: 1, link: '/search?query='+query+'&page=1' },
                        { page: 2, link: '/search?query='+query+'&page=2' },
                        { page: 3, link: '/search?query='+query+'&page=3' },
                        { page: 4, link: '/search?query='+query+'&page=4' },
                        { page: 5, link: '/search?query='+query+'&page=5' }
                    ];


                    $scope.pages = pages;
                }
            });


            $scope.loading = true;
            var stkService = stkHttpService.searchFor(query,page);
            stkService.then(function(data) {
                $scope.products = data;

                stkMetaService.setDescription(query.substr(0,139));

                $rootScope.ogTitle = 'Dreambeem.com - Power Market | "'+query+'"';
                $rootScope.ogDescription = query.substr(0,139);
                $rootScope.ogImage =  'https://www.dreambeem.com/images/search_site.svg';
                $rootScope.ogType = 'website';
                $rootScope.ogUrl = $location.absUrl();

                for(var index = 0; index < $scope.products.length; index++) {

                    var title = getSlug($scope.products[index][0].title, options);
                    $scope.products[index][0].titleNew = title;
                }

                if(!$scope.products) {
                    $scope.productMessage = 'Keine Produkte gefunden!';
                }

                $scope.loading = false;
            });

            $scope.pageNumber = parseInt(page);
            $scope.q = query;
            $scope.qd = decodeURIComponent(query);
        };

        $scope.addToSearchField = function(suggested) {
            $scope.loading = true;
            var query = document.getElementById('search');
            $(query).val(suggested);
            var suggestedList = document.getElementById('suggestedList');
            $(suggestedList).hide();
            $scope.loading = false
        };

        $scope.keyDown = function(event, keyCount) {
            var charCode = event.keyCode;


            if(parseInt(keyCount) > 2) {

                var query = document.getElementById('search');
                var searchText = $(query).val();

                if(charCode !== 13) {
                    if(charCode !== 8) {
                        var s = searchText.concat(String.fromCharCode(charCode));
                    } else {
                        var s = searchText.substr(0,(searchText.length-1));
                    }
                } else {
                    $scope.submitSearch(event, query);
                }

                $scope.loading = true;
                var stkService = stkHttpService.getAutoCompleteSuggestions(s);
                stkService.then(function(data) {
                    $rootScope.suggestions = data;
                    var wAutoComplete = document.getElementById('suggestedList');
                    $(wAutoComplete).show();
                    $scope.loading = false;
                });
            }
        };
    });

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

angular.module('dreambeemcomApp')
    .controller('DreamproductCtrl', function ($scope, $location, $timeout, $window,stkStatusCodeService, stkHttpService, $mdToast, $rootScope, stkMetaService) {
        if(!angular.isDefined($scope.url1)) {
            $scope.url1 = $location.path();

            if($scope.url1 && $scope.url1 !== undefined) {
                var completeUrl = $scope.url1.split('/');

                var id = completeUrl[2];
                var pid = completeUrl[3];

                if(document.referrer.indexOf('/ab/m/',0) > 0 || document.referrer.indexOf('/ab/l/',0) > 0 || document.referrer.indexOf('/watch?id=',0) > 0) {
                    stkStatusCodeService.setStatusCode('301');
                    stkStatusCodeService.setLocation($location.absUrl());
                }

                var stkService = stkHttpService.getDreamProduct(id, pid);
                stkService.then(function(data) {
                    $scope.product = data.data;

                    if(data.data[0].dream_price) {
                        $scope.product.price = data.data[0].dream_price.replace('.',',') + ' €';
                    }

                    $scope.pid = pid;
                    $rootScope.pid = pid;

                    stkMetaService.setTitle($scope.product[0].title);
                    stkMetaService.setDescription($scope.product[0].description.substr(0,139));

                    $rootScope.product = true;

                    $rootScope.ogTitle = $scope.product[0].title;
                    $rootScope.ogDescription = data.data[0].description.substr(0,139);
                    $rootScope.ogImage =  data.data[0].main_image;
                    $rootScope.ogType = 'product';
                    $rootScope.ogUrl = $location.absUrl();


                    if(parseInt(data.data[0].categoryLayerCount) === 1) {
                        $scope.category = data.data[0].categoryLayer1Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 2) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 3) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name + '->' +
                        data.data[0].categoryLayer3Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 4) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name + '->' +
                        data.data[0].categoryLayer3Name + '->' + data.data[0].categoryLayer4Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 5) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name + '->' +
                        data.data[0].categoryLayer3Name + '->' + data.data[0].categoryLayer4Name + '->' +
                        data.data[0].categoryLayer5Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 6) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name + '->' +
                        data.data[0].categoryLayer3Name + '->' + data.data[0].categoryLayer4Name + '->' +
                        data.data[0].categoryLayer5Name + '->' + data.data[0].categoryLayer6Name;
                    } else if(parseInt(data.data[0].categoryLayerCount) === 7) {
                        $scope.category = data.data[0].categoryLayer1Name + '->' + data.data[0].categoryLayer2Name + '->' +
                        data.data[0].categoryLayer3Name + '->' + data.data[0].categoryLayer4Name + '->' +
                        data.data[0].categoryLayer5Name + '->' + data.data[0].categoryLayer6Name + '->' +
                        data.data[0].categoryLayer7Name;
                    }

                    $rootScope.ogImageAlt = $scope.category;

                    $scope.sloading = true;

                    var stkService = stkHttpService.checkShopBridge(pid);
                    stkService.then(function(data1) {
                        if(data1.data === 'failed') {
                            var stkService = stkHttpService.getShopBridge(id,pid);
                            stkService.then(function(data1) {

                                if(data1.data.available == true) {
                                    $scope.available = true;
                                    $scope.product.price = data1.data.product.price.replace('.',',') + ' €';
                                } else {
                                    $scope.productAvailable = 'Produkt zur Zeit nicht verfügbar!';
                                    $scope.available = false;
                                }

                                $scope.sloading = false;
                            });
                        }

                        var catId = data.data[0].categoryId;
                        var stkService = stkHttpService.getSimilarProductsCount(id,pid,catId);
                        stkService.then(function(data1) {

                            var dCount = data1.data;
                            var stkService = stkHttpService.getSimilarProducts(id,pid,catId,dCount);
                            stkService.then(function(data12) {
                                $scope.similarProducts = data12.data;

                                var options = {
                                    lang: 'de',
                                    maintainCase: true,
                                    separator: '-'
                                };

                                var getSlug = createSlug(options);

                                for (var i = 0; i < $scope.similarProducts.length; i++) {
                                    if ($scope.similarProducts[i].title) {
                                        $scope.similarProducts[i].sstitle = getSlug($scope.similarProducts[i].title, options);
                                    }

                                    $scope.similarProducts[i].sid = pid;
                                }
                            });
                        });
                    });
                });
            }
        }

        $scope.addProduct2Cart = function(id,pid) {
            if(id && pid) {
                var stkService = stkHttpService.addProduct2Cart(id,pid);
                stkService.then(function(data1) {
                    if(data1.data === 'ok') {
                        var productCartCount = parseInt($('#cart').text());
                        $scope.cartNumber = (productCartCount + 1);
                        $('#cart').text($scope.cartNumber);
                        $mdToast.show({
                            theme       : 'success-toast',
                            hideDelay   : 3000,
                            position    : 'top',
                            controller  : 'ToastCtrl',
                            templateUrl : 'views/toasts/toast_cart_alert_1.html',
                            toastClass  : 'md-success-toast-theme'
                        });
                    } else {
                        $mdToast.show({
                            theme       : 'success-toast',
                            hideDelay   : 3000,
                            position    : 'top',
                            controller  : 'ToastCtrl',
                            templateUrl : 'views/toasts/toast_cart_alert_0.html',
                            toastClass  : 'md-success-toast-theme'
                        });
                    }
                });
            }
        };
    });

angular.module('dreambeemcomApp')
    .controller('DreambeemCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.reloadRoute = function() {
            $route.reload();
        };

        $scope.loading = true;
        $scope.dreambeem_confirmation = '';
        $scope.error_confirmation = '';

        var dreamId = $location.search().id;
        var customerId = $location.search().cid;
        var kind = $location.search().kind;
        var sender = $location.search().sid;
        var link = $location.search().link1;


        var dreamObject = {};
        dreamObject.cid = customerId;
        dreamObject.id = dreamId;
        dreamObject.kind = kind;
        dreamObject.sender = sender;
        dreamObject.link = link;

        var url = encodeURIComponent($location.absUrl());

        if(kind === 'facebook') {
            Facebook.getLoginStatus(function(response) {
                var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                if (response.status === 'connected') {
                    var stkService = stkHttpService.dreambeemConfirmation(dreamObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_dreambeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com';
                            }, 3000);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                            $scope.error_confirmation = true;
                        }
                    });
                } else {
                    $window.location = "https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + url + "&response_type=token&scope=email,user_friends,manage_pages,public_profile,business_management";
                }
            });
        } else if(kind === 'twitter') {

            $scope.loading = true;

            var stkService = stkHttpService.controlLoginTwitter();
            stkService.then(function(data) {
                $scope.response = data;

                if($scope.response.data === 'ok') {
                    var stkService = stkHttpService.dreambeemConfirmation(dreamObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_dreambeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.dreambeem_confirmation = 'Dreambeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = dreamObject.link;
                            }, 2800);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Dreambeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                            $scope.error_confirmation = true;
                        }
                    });
                } else {
                    var stkService = stkHttpService.TWLoginRet(url);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.length > 0) {
                            $window.location = encodeURI($scope.response);
                        }
                    });
                }
            });
        }

        $scope.loading = false;
    });

angular.module('dreambeemcomApp')
    .controller('FurnybeemCtrl', function ($scope, $window, $timeout, stkHttpService, Facebook, $mdToast, $location, $route) {

        $scope.reloadRoute = function() {
            $route.reload();
        };

        $scope.loading = true;
        $scope.furnybeem_confirmation = '';
        $scope.error_confirmation = '';

        var furnyId = $location.search().id;
        var customerId = $location.search().cid;
        var fbReach = $location.search().fbReach;
        var twReach = $location.search().twReach;
        var kind = $location.search().kind;
        var sender = $location.search().sid;


        var furnyObject = {};
        furnyObject.cid = customerId;
        furnyObject.id = furnyId;
        furnyObject.fbReach = fbReach;
        furnyObject.twReach = twReach;
        furnyObject.kind = kind;
        furnyObject.sender = sender;

        var url = encodeURIComponent($location.absUrl());

        if(kind === 'facebook') {
            Facebook.getLoginStatus(function(response) {
                var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
                if (response.status === 'connected') {
                    var stkService = stkHttpService.furnybeemConfirmation(furnyObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_furnybeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.furnybeem_confirmation = 'Furnybeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com';
                            }, 3000);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Furnybeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                            $scope.error_confirmation = true;
                        }
                    });
                } else {
                    $window.location = "https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + url + "&response_type=token&scope=email,user_friends,manage_pages,public_profile,business_management";
                }
            });
        } else if(kind === 'twitter') {

            $scope.loading = true;

            var stkService = stkHttpService.controlLoginTwitter();
            stkService.then(function(data) {
                $scope.response = data;

                if($scope.response.data === 'ok') {
                    var stkService = stkHttpService.furnybeemConfirmation(furnyObject);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.data === 'ok') {
                            $mdToast.show({
                                theme       : 'success-toast',
                                hideDelay   : 3000,
                                position    : 'top',
                                controller  : 'ToastCtrl',
                                templateUrl : 'views/toasts/toast_furnybeem_confirmation_1.html',
                                toastClass  : 'md-success-toast-theme'
                            });

                            $scope.furnybeem_confirmation = 'Furnybeem Bestätigung läuft';
                            $scope.error_confirmation = false;

                            $timeout(function() {
                                $window.location.href = 'https://dreams.dreambeem.com/';
                            }, 2800);
                        } else {
                            $mdToast.show($mdToast.simple().textContent($scope.response.data));

                            $scope.furnybeem_confirmation = 'Furnybeem Bestätigung fehlgeschlagen. Wiederhole noch einmal die Bestätigung.';
                            $scope.error_confirmation = true;
                        }
                    });
                } else {
                    var stkService = stkHttpService.TWLoginRet(url);
                    stkService.then(function(data) {
                        $scope.response = data;

                        if($scope.response.length > 0) {
                            $window.location = encodeURI($scope.response);
                        }
                    });
                }
            });
        }

        $scope.loading = false;
    });

angular.module('dreambeemcomApp')
    .controller('LoginCtrl', function ($scope, Facebook, $location, stkHttpService, $window) {
        $scope.loginStatus = 'disconnected';
        $scope.facebookIsReady = false;

        $scope.checkLogin = function() {

            $scope.loading = true;
            var stkService = stkHttpService.checkLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $scope.loading = false;

                if($scope.response.data === 'ok') {
                    $window.location.href = "https://dreams.dreambeem.com/";
                } else {
                    $window.location.href = "https://www.dreambeem.com/dreamlogin/";
                }
            });
        };

        $scope.FBlogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,business_management");
                } else if (response.status === 'not_authorized') {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,business_management");
                } else {
                    $window.location = encodeURI("https://www.facebook.com/v2.9/dialog/oauth?client_id=1107023486046982&redirect_uri=" + uri + "&response_type=token&state=" + uniqueState + "&scope=email,user_friends,manage_pages,public_profile,business_management");
                }
            });
        };

        $scope.twitterOAuth = function() {
            $scope.loading = true;
            var stkService = stkHttpService.TWLogin();
            stkService.then(function(data) {
                $scope.response = data;
                $window.location = $scope.response;
            });
        };
    });

angular.module('dreambeemcomApp')
    .controller('MarkCtrl', function ($scope, $location, $window, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');

    });

angular.module('dreambeemcomApp')
    .controller('PagemetaCtrl', function ($scope, $location,$window,$rootScope, stkMetaService) {
        $scope.Page = stkMetaService;

        $rootScope.ogTitle = $rootScope.ogTitle;
        $rootScope.ogDescription = $rootScope.ogDescription;
        $rootScope.ogImage = $rootScope.ogImage;
        $rootScope.ogType = 'website';
        $rootScope.ogImageAlt = $rootScope.ogImageAlt;
        $rootScope.ogUrl = $location.absUrl();
    });

angular.module('dreambeemcomApp')
    .controller('WatchCtrl', function ($scope, $location, $window, stkHttpService, stkStatusCodeService) {
        $scope.id = $location.search().id;
        $scope.kind = $location.search().kind;

        if($scope.id && $scope.id !== undefined) {
            if($scope.kind && $scope.kind === 'advert') {;
                var stkService = stkHttpService.getOldLink($scope.id);
                stkService.then(function (data) {
                    if(data.data === 'ok') {
                        $window.location.href = data.link1;
                    } else {
                        $window.location.href = 'https://www.dreambeem.com/404';
                    }
                });
            }
        }
    });

angular.module('dreambeemcomApp')
    .controller('Ab_lCtrl', function ($scope, $window, $location,stkHttpService) {
        $scope.url1 = $location.path();

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            var id = completeUrl[4];

            var stkService = stkHttpService.getOldLink(id);
            stkService.then(function (data) {
                if(data.data === 'ok') {
                    $window.location.href = data.link1;
                } else {
                    $window.location.href = 'https://www.dreambeem.com/404';
                }
            });
        }
    });

angular.module('dreambeemcomApp')
    .controller('Ab_mCtrl', function ($scope, $location, $rootScope, $timeout, $window,stkHttpService) {
        $scope.url1 = $location.path();
        $window.prerenderReady = false;

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            var id = completeUrl[4];

            var stkService = stkHttpService.getOldLink(id);
            stkService.then(function (data1) {
                $window.prerenderReady = true;
                if(data1.data === 'ok') {
                    $window.location.href = data1.link1;
                } else {
                    $window.location.href = 'https://www.dreambeem.com/404';
                }
            });
        }
    });

angular.module('dreambeemcomApp')
    .controller('Watch_pCtrl', function ($scope, $location, $window, stkHttpService, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');
    });

angular.module('dreambeemcomApp')
    .controller('OldCategoryCtrl', function ($scope, $location, $window, stkStatusCodeService) {
        stkStatusCodeService.setStatusCode('404');
    });

angular.module('dreambeemcomApp')
    .controller('ToastCtrl', function ($scope, stkHttpService, $window, $location, $mdToast) {
        var isDlgOpen;

        $scope.closeToast = function () {
            if (isDlgOpen) return;

            $mdToast
                .hide()
                .then(function () {
                    isDlgOpen = false;
                });
        };

    });




