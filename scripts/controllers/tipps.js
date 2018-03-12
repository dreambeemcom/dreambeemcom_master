'use strict';

angular.module('dreambeemcomApp')
    .controller('TippsCtrl', function ($scope, $location, $window, stkHttpService,stkMetaService, stkStatusCodeService) {
        var url = $location.path();

        if(url === '/tipps') {
            stkMetaService.setTitle('Dreambeem.com - Tipps');
            stkMetaService.setDescription('Dreambeem.coms Tipps erklären, wie Du mit Dreambeem.com Erfolge erzielen kannst. Verschiedene Marketing Methoden sind hier aufgelistet und werden detailliert beschrieben');
            stkStatusCodeService.setStatusCode('200');
        } else if(url === '/tipps/facebook-seite/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping');
            stkMetaService.setDescription('Um zu erklären, wie Dropshipping funktioniert, betrachten wir zuerst die Art, wie der Einkaufsprozess im klassischen Online - Handel vonstatten geht. Der Händler entscheidet sich für eine bestimmte Produktpalette. Er kauft, meistens in großen Mengen, diese Waren ein um sie wieder auf dem freien Markt gegen eine Marge anzubieten. Die Lagerung erfolgt in speziellen Lagerräumen oder in der Privatwohnung.');
            stkStatusCodeService.setStatusCode('200');
        } else if(url === '/tipps/private-nachrichten/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Social Media');
            stkMetaService.setDescription(' Social Media hat sich als Grundbegriff in den Medien eingebürgert. Es wird von der Internetgemeinde am häufigsten genutzt und stellt für viele die täglichen Klicks dar. Ob Facebook, Twitter, Instagram oder Quora - Sie sind alle soziale Kanäle, ohne die wir unser tägliches Leben nicht mehr vorstellen können. Facebook - Seiten und Twitter Follower gehören zu den Merkmalen, die dieses Medium am besten beschreiben.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/tipps/viele-follower/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Marketing');
            stkMetaService.setDescription('Jeder, der im Internet aktiv ist, hat mindestens einen Social Media Account bei Facebook, Twitter & Co. Somit stellt er/sie bereits die Grundlage für Social Media Marketing dar. Jeder verbundene User ist ein potenzieller Käufer. Mit dem richtigen Marketing wirst Du schnell merken, dass die Leute bei seriöser Abwicklung immer wieder kommen werden.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/tipps/facebook-gruppen/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Chancen auf dem Markt');
            stkMetaService.setDescription('Die Chancen auf dem freien Markt sind gut bis sehr gut, da sich mit Social Media durch Vernetzung der User eine hohe Reichweite erzielen lässt. Du findest mit den richtigen Maßnahmen immer jemanden, der sich für deine Produkte interessieren wird.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/tipps/immer-posten/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dropshipping & Social Media');
            stkMetaService.setDescription('Dropshipping & Social Media sind richtig eingesetzt ein optimales Gespann um gewinnbringend Waren und Dienstleistungen im Internet anzubieten. Dropshipping liefert das Modell zum simplen Verkaufen von Waren im Internet und Social Media liefert die gewünschte Reichweite um Menschen zu erreichen, die einkaufen wollen.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/tipps/beemline/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dreambeems Rolle');
            stkMetaService.setDescription('Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.');
            stkStatusCodeService.setStatusCode('200');
        } else if(url === '/tipps/andere-social-meia-kanaele/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dreambeems Rolle');
            stkMetaService.setDescription('Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.');
            stkStatusCodeService.setStatusCode('200');
        }
        else if(url === '/tipps/kontakte/') {
            stkMetaService.setTitle('Dreambeem.com - Wegweiser - Dreambeems Rolle');
            stkMetaService.setDescription('Dreambeem.com bringt Dropshipping und Social Media zusammen. Du verkaufst mit deinem Dreambeem - Shop Waren über die Social Media Kanäle. Die Möglichkeiten, die Facebook, Twitter & Co. bieten, hast Du bei Dreambeem.com ebenfalls zur Verfügung. Teilen, Nachrichten senden oder twittern um nur Einige zu nennen.');
            stkStatusCodeService.setStatusCode('200');
        }
    });
