'use strict';

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
                    console.log(data);
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
                                 console.log(data1);

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
