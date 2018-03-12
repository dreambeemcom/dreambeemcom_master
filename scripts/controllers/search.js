'use strict';

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
