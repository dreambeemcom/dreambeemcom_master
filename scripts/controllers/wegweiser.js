'use strict';

angular.module('dreambeemcomApp')
    .controller('WegweiserCtrl', function ($scope, $location, $window, stkHttpService,stkMetaService, stkStatusCodeService) {
        var url = $location.path();

        if(url === '/wegweiser') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser');
            stkMetaService.setDescription('Dreambeem.coms Wegweiser zeigt den Weg für eine erfolgreiche Nutzung von Dreambeem.com. Erklärt werden Begriffe, wie Dropshipping, Social Media, sowie die Verknüpfung der ' +
            'beider Begrifflichkeiten zu dem System von Dreambeem.com. Chancen auf dem freien Markt sind ebenso enthalten, wie Marketing.');
            stkStatusCodeService.setStatusCode('200');
        } else if(url === '/wegweiser/dropshipping/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping');
            stkMetaService.setDescription('Um zu erklären, wie Dropshipping funktioniert, betrachten wir zuerst die Art, wie der Einkaufsprozess im klassischen Online - Handel vonstatten geht. Der Händler entscheidet sich für eine bestimmte Produktpalette. Er kauft, meistens in großen Mengen, diese Waren ein um sie wieder auf dem freien Markt gegen eine Marge anzubieten. Die Lagerung erfolgt in speziellen Lagerräumen oder in der Privatwohnung.');
            stkStatusCodeService.setStatusCode('200');
        } else if(url === '/wegweiser/social-media/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Social Media');
            stkMetaService.setDescription(' Social Media hat sich als Grundbegriff in den Medien eingebürgert. Es wird von der Internetgemeinde am häufigsten genutzt und stellt für viele die täglichen Klicks dar. Ob Facebook, Twitter, Instagram oder Quora - Sie sind alle soziale Kanäle, ohne die wir unser tägliches Leben nicht mehr vorstellen können. Facebook - Seiten und Twitter Follower gehören zu den Merkmalen, die dieses Medium am besten beschreiben.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/marketing/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Marketing');
            stkMetaService.setDescription('Jeder, der im Internet aktiv ist, hat mindestens einen Social Media Account bei Facebook, Twitter & Co. Somit stellt er/sie bereits die Grundlage für Social Media Marketing dar. Jeder verbundene User ist ein potenzieller Käufer. Mit dem richtigen Marketing wirst Du schnell merken, dass die Leute bei seriöser Abwicklung immer wieder kommen werden.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/chancen-auf-dem-markt/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Chancen auf dem Markt');
            stkMetaService.setDescription('Die Chancen auf dem freien Markt sind gut bis sehr gut, da sich mit Social Media durch Vernetzung der User eine hohe Reichweite erzielen lässt. Du findest mit den richtigen Maßnahmen immer jemanden, der sich für deine Produkte interessieren wird.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/dropshipping-social-media/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping & Social Media');
            stkMetaService.setDescription('Dropshipping & Social Media sind richtig eingesetzt ein optimales Gespann um gewinnbringend Waren und Dienstleistungen im Internet anzubieten. Dropshipping liefert das Modell zum simplen Verkaufen von Waren im Internet und Social Media liefert die gewünschte Reichweite um Menschen zu erreichen, die einkaufen wollen.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/dreambeems-rolle/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dreambeems Rolle');
            stkMetaService.setDescription('Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/twitter-follower/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Twitter Follower erhalten');
            stkMetaService.setDescription('Mit Dreambeem.com kannst Du mit ein wenig Fleiß eine Menge an Followern erhalten. Täglich Leuten folgen, die z.B. in Deiner Sprache Twitter nutzen. Über 1,3 Mio. TwitterBenutzer sind in Dreambeem.com enthalten.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/wegweiser/twitter-messages/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Twitter Messages');
            stkMetaService.setDescription('Über unsere Einstellungen lassen sich automatisierte Twitter Messages senden. Bei jedem neuen Follower wird eine von Dir definierte Nachricht an den entsprechenden Twitter - User gesendet.Somit bleibst Du im Gespräch und sendest dem Twitter Follower Signale, dass Du in der Community aktiv bist. ');
            stkStatusCodeService.setStatusCode('200');
        }
    });
