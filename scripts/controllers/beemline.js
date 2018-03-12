'use strict';

angular.module('dreambeemcomApp')
    .controller('BeemlineCtrl', function ($scope, $timeout, $mdToast, $mdSidenav, $http, stkHttpService, stkMetaService , $interval, $compile,  $mdDialog, Facebook, $window, $location) {
        $scope.beemlineShow = false;

        $scope.url1 = $location.path();
        var search = '';

        if($scope.url1 && $scope.url1 !== undefined) {
            var completeUrl = $scope.url1.split('/');

            if(completeUrl[2] === 'search') {
                var search = completeUrl[3];
                $scope.h1 = 'Suche - ' + decodeURI(search);
                stkMetaService.setTitle('Dreambeem.com - ' + $scope.h1);
            } else {
                var catid = completeUrl[3];
                if(completeUrl[2]) {
                    var category = decodeURI(completeUrl[2]);
                } else {
                    var category = 'Suche';
                }

                $scope.h1 = category;
                stkMetaService.setTitle('Dreambeem.com - ' + category);
            }
        }

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
                    $scope.promiseIntervalBase = $interval(function(){ $scope.counter--; },1000,0);
                    var stkService = stkHttpService.getBeemlineSearch(search,qua);
                    stkService.then(function (data) {
                        if (data) {
                            $scope.count = $scope.count + data.data.length;
                            for (var index = 0; index < data.data.length; index++) {
                                if (data.data.length > 0) {
                                    if(data.seo) {
                                        if(data.seo.length > 0) {
                                            $scope.seoText = data.seo;
                                            stkMetaService.setDescription($scope.seoText.substr(0,139));
                                        }
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
                                        '<img width="290" src="' + data.data[index][0].main_image + '">' +
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
                        }

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
                                            $scope.counter--; },
                                        1000,0);

                                        for (var index = 0; index < data.data.length; index++) {
                                            if (data.data.length > 0) {
                                                if(data.seo) {
                                                    if(data.seo.length > 0) {
                                                        $scope.seoText = data.seo;
                                                        stkMetaService.setDescription($scope.seoText.substr(0,139));
                                                    }
                                                }
                                                $scope.beemlineShow = false;
                                                for(var jindex = 0; jindex < data.data.length; jindex++) {
                                                    if(data.data[jindex][0].selling_price && data.data[jindex][0].title) {
                                                        var title = getSlug(data.data[jindex][0].title, options);
                                                        data.data[jindex][0].titleN = title;

                                                        data.data[jindex][0].s_price = data.data[jindex][0].selling_price.replace('.',',');
                                                    }
                                                }
                                                var div = '<div id="cBeemline_' + data.data[index][0].id + '" style="margin-left: auto; margin-right: auto; display: block; display: none; width: 300px ; padding: 15px;">' +
                                                    '<div class="clearfix"></div>' +
                                                    '<a style="text-decoration: none; color: #000000;" class="beemline-link" href="https://www.dreambeem.com/' + data.data[index][0].titleN + '/' + data.data[index][0].productId + '/' + data.data[index][0].shopId + '">' +
                                                    '<h3><strong>' + data.data[index][0].title + '</strong></h3>' +
                                                    '<img width="290" src="' + data.data[index][0].main_image + '">' +
                                                    '<span>' + data.data[index][0].description + '</span>' +
                                                    '<md-divider></md-divider>' +
                                                    '<span class="m-t">Richtpreis: <strong>' + data.data[index][0].s_price + ' €</strong></span>' +
                                                    '</a>' +
                                                    '<md-button ng-controller="MainCtrl" ng-click="addProduct2Cart(' + data.data[index][0].productId + ',' + data.data[index][0].shopId + ');" class="md-button md-raised md-warn">In den Warenkorb</md-button>';

                                                var el = document.getElementById('beemline');

                                                angular.element(el).append($compile(div)($scope));

                                                $('#cBeemline_' + data.data[index][0].id).fadeIn(3500, "swing");
                                                $scope.beemlineShow = true;
                                            }
                                        }
                                    } else {
                                        $scope.counter = 0;
                                        $interval.cancel($scope.promiseIntervalBase);
                                        $interval.cancel($scope.promiseIntervalFinal);
                                    }
                                }
                            });
                        }, 20000);
                    });
                } else if(catid){

                    var iindex = 0;
                    qua = iindex * 16;
                    iindex = iindex + 1;
                    $scope.counter = 21;
                    $scope.promiseIntervalCBase = $interval(function(){ $scope.counter--; },1000,0);
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
                                            }
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
                                            '<img width="290" src="' + data.data[index][0].main_image + '">' +
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
                                        $scope.counter--;
                                    }, 1000, 0);

                                    for (var index1 = 0; index1 < data12.data.length; index1++) {
                                        if (data12.data.length > 0) {
                                            if(data12.seo) {
                                                if(data12.seo.length > 0) {
                                                    $scope.seoText = data12.seo;
                                                    stkMetaService.setDescription($scope.seoText.substr(0,139));
                                                }
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
                                                '<img width="290" src="' + data12.data[index1][0].main_image + '">' +
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
            console.log(search);
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


    });