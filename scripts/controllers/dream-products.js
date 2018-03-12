'use strict';

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
                console.log($scope.categoryPages);

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

                    /*if($scope.seoData) {
                        stkMetaService.setDescription($scope.seoData[0].seoText.substr(0,139));
                    }*/

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
