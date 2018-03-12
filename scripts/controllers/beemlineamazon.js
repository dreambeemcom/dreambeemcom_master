'use strict';

angular.module('dreambeemcomApp')
    .controller('BeemlineAmazonCtrl', function ($scope, $mdMenu, Facebook, $compile, $document, $location, $rootScope, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {

        $scope.beemlineShow = false;

        $scope.url1 = $location.path();

        $scope.isCurrentPage = function(page, pageNumber) {
            if(page == pageNumber) {
                return true;
            } else {
                return false;
            }
        };

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            if(completeUrl[2] === 'amazon') {
                var q = completeUrl[3];
                var page = completeUrl[4];
                if(page === undefined || page === null || page === '') {
                    page = 1;
                } else {

                }

                $scope.pageNumber = parseInt(page);

                if(q) {
                    if(q.length > 0) {
                        $scope.h1 = 'Amazon Suche - ' + decodeURI(q);
                        stkMetaService.setTitle('Dreambeem.com - ' + $scope.h1);
                        if(q) {
                            $scope.loading = true;
                            var stkService = stkHttpService.amazon(q,page);
                            stkService.then(function(data) {
                                $scope.amazonProducts = data.data;
                                console.log($scope.amazonProducts);

                                if($scope.amazonProducts) {
                                    for(var index = 0; index < 10; index++) {
                                        $scope.beemlineShow = false;
                                        var div = '<div id="cAmazon_' + index + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;" ng-cloak>' +
                                            '<img width="80" src="/images/amalogo.jpg" class="pull-left"><h3 class="pull-left"><strong>Amazon</strong></h3>' +
                                            '<div class="clearfix"></div>' +
                                            '<a style="text-decoration: none; color: black;" class="beemline-link" href="' + $scope.amazonProducts.Items.Item[index].DetailPageURL + '">' +
                                            '<h3><strong>' + $scope.amazonProducts.Items.Item[index].ItemAttributes.Title + '</strong></h3>';
                                        if($scope.amazonProducts.Items.Item[index].LargeImage) {
                                            div = div + '<img width="290" src="' + $scope.amazonProducts.Items.Item[index].LargeImage.URL + '">';
                                        }

                                        if($scope.amazonProducts.Items.Item[index].ItemAttributes.Feature) {
                                            for(var indi = 0; indi < $scope.amazonProducts.Items.Item[index].ItemAttributes.Feature.length; indi++) {
                                                div = div + '<span>' + $scope.amazonProducts.Items.Item[index].ItemAttributes.Feature[indi] + '</span><br>';
                                            }
                                        }


                                        div = div + '<span>Neu <strong>' + $scope.amazonProducts.Items.Item[index].OfferSummary.LowestNewPrice.FormattedPrice  + '</strong></span><br>' +
                                        '<md-divider></md-divider>' +
                                        '</a>' +
                                        '<a href="' +  $scope.amazonProducts.Items.Item[index].DetailPageURL + '" target="_blank">' +
                                        '<md-button class="md-button md-raised md-warn">Zum Produkt</md-button>' +
                                        '</a>' +
                                        '<a href="' +  $scope.amazonProducts.Items.Item[index].ItemLinks.ItemLink[3].URL + '" target="_blank">' +
                                        '<md-button class="md-button md-raised md-warn">Zu Amazons Produktvorschläge</md-button>' +
                                        '</a>' +
                                        '<a href="' +  $scope.amazonProducts.Items.Item[index].ItemLinks.ItemLink[2].URL + '" target="_blank">' +
                                        '<md-button class="md-button md-raised md-warn">Zu Kundenbewertungen</md-button>' +
                                        '</a>';

                                        var el = document.getElementById('beemline');

                                        angular.element(el).prepend($compile(div)($scope));

                                        //$('#beemline').prepend(div);
                                        $("#cAmazon_" + index).fadeIn(2500, "swing");
                                        $scope.beemlineShow = true;
                                    }
                                } else {
                                    $scope.searchAmazonMessage = 'Keine Produkte gefunden.';
                                }

                                $scope.pagesCount = $scope.amazonProducts.Items.TotalPages;
                                var pCount = Math.ceil((parseInt($scope.amazonProducts.Items.TotalResults) / 10));
                                if(page == 1 && pCount >= 5) {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' },
                                        { page: 2, link: '/beemline/amazon/' + encodeURI(q) + '/2' },
                                        { page: 3, link: '/beemline/amazon/' + encodeURI(q) + '/3' },
                                        { page: 4, link: '/beemline/amazon/' + encodeURI(q) + '/4' },
                                        { page: 5, link: '/beemline/amazon/' + encodeURI(q) + '/5' }
                                    ];

                                    $scope.pages = pages;
                                } else if(pCount == 1) {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' }
                                    ];

                                    $scope.pages = pages;
                                } else if(pCount == 2) {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' },
                                        { page: 2, link: '/beemline/amazon/' + encodeURI(q) + '/2' },
                                    ];

                                    $scope.pages = pages;
                                } else if(pCount == 3) {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' },
                                        { page: 2, link: '/beemline/amazon/' + encodeURI(q) + '/2' },
                                        { page: 3, link: '/beemline/amazon/' + encodeURI(q) + '/3' }
                                    ];

                                    $scope.pages = pages;
                                } else if(pCount == 4) {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' },
                                        { page: 2, link: '/beemline/amazon/' + encodeURI(q) + '/2' },
                                        { page: 3, link: '/beemline/amazon/' + encodeURI(q) + '/3' },
                                        { page: 4, link: '/beemline/amazon/' + encodeURI(q) + '/4' }
                                    ];

                                    $scope.pages = pages;
                                } else {
                                    var pages = [
                                        { page: 1, link: '/beemline/amazon/' + encodeURI(q) + '/1' },
                                        { page: 2, link: '/beemline/amazon/' + encodeURI(q) + '/2' },
                                        { page: 3, link: '/beemline/amazon/' + encodeURI(q) + '/3' },
                                        { page: 4, link: '/beemline/amazon/' + encodeURI(q) + '/4' },
                                        { page: 5, link: '/beemline/amazon/' + encodeURI(q) + '/5' }
                                    ];


                                    $scope.pages = pages;
                                }

                                $scope.loading = false;

                            });
                        }
                    }
                }
            } 
        }

        $scope.submitAmazonSearch = function(q) {
            $window.location.href= 'https://www.dreambeem.com/beemline/amazon/' + encodeURI(q) + '/1';

        };
    });