'use strict';

angular.module('dreambeemcomApp')
    .controller('BeemlineEbayCtrl', function ($scope, $mdMenu, Facebook, $compile, $document, $location, $rootScope, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {
        $scope.searchEbay = function(q) {
            if(q) {
                $scope.loading = true;
                var stkService = stkHttpService.ebay(q);
                stkService.then(function(data) {
                    $scope.ebayProducts = data.data.pe;
                    $scope.aeCount = data.count;

                    for(var index = 0; index < $scope.ebayProducts.length; index++) {
                        $scope.beemlineShow = false;

                        var days = $scope.ebayProducts[index].timeLeft.substr($scope.ebayProducts[index].timeLeft.indexOf('P')+1,$scope.ebayProducts[index].timeLeft.indexOf('DT')-1);
                        var hours = $scope.ebayProducts[index].timeLeft.substr($scope.ebayProducts[index].timeLeft.indexOf('T')+1,2);
                        var minutes = $scope.ebayProducts[index].timeLeft.substr($scope.ebayProducts[index].timeLeft.indexOf('H')+1,2);
                        var seconds = $scope.ebayProducts[index].timeLeft.substr($scope.ebayProducts[index].timeLeft.indexOf('M')+1,2);
                        var tl = ' <span class="warning">Tage ' + days + '</span><span class="text-danger"> Stunden ' + hours + '</span><span class="text-warning"> Minuten ' + minutes + '</span> Sekunden ' + seconds;

                        var pri = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format($scope.ebayProducts[index].currentPrice);

                        var div = '<div id="cEbay_' + index + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;" ng-cloak>' +
                            '<img width="80" src="/images/ebaylogo.png" class="pull-left"><h3 class="pull-left"><strong>Ebay</strong></h3>' +
                            '<div class="clearfix"></div>' +
                            '<a class="beemline-link" href="' + $scope.ebayProducts[index].productUrl + '">' +
                            '<h3><strong>' + $scope.ebayProducts[index].title + '</strong></h3>' +
                            '<img width="290" src="' + $scope.ebayProducts[index].image + '">' +
                            '<span><strong>' + $scope.ebayProducts[index].condition + '</strong></span><br>' +
                            '<span>Sofort - Kauf <strong>' + $scope.ebayProducts[index].buyItNowAvailable + '</strong></span><br>' +
                            '<span>Preisvorschlag <strong>' + $scope.ebayProducts[index].bestOfferEnabled + '</strong></span><br>' +
                            '<span>Aktuell <strong>' + pri + '</strong></span><br>' +
                            '<span>Läuft aus <strong>' + tl + '</strong></span>' +
                            '<md-divider></md-divider>' +
                            '</a>' +
                            '<a href="' +  $scope.ebayProducts[index].productUrl + '" target="_blank">' +
                            '<md-button class="md-button md-raised md-warn">Zum Produkt</md-button>' +
                            '</a>';

                        var el = document.getElementById('beemline');

                        angular.element(el).prepend($compile(div)($scope));

                        //$('#beemline').prepend(div);
                        $("#cEbay_" + index).fadeIn(3500, "swing");
                        $scope.beemlineShow = true;
                    }

                    $scope.loading = false;

                });
            }
        }
    });