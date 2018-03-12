'use strict';

angular.module('dreambeemcomApp')
  .controller('MainCtrl', function ($scope, $mdMenu, Facebook, $compile, $document, $location, $rootScope, stkStatusCodeService, $window, $timeout, $mdDialog, $mdPanel, stkHttpService, $mdToast, $sce, $http, $interval, stkMetaService) {

        stkMetaService.setTitle('Dreambeem.com - Power Market');
        stkMetaService.setDescription('Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
        'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives ' +
        'Interneterlebnis.');
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
        var desc = 'Dreambeem.com ist ein social - E - Commerce Unternehmen, dass durch innovative Software (SaaS) die sozialen Medien nutzt, um für den User einen anspruchsvollen ' +
            'Mehrwert zu schaffen. Mit der Beem - Line, die individuell einstellbar ist und den Hauptfunktionalitäten "Dreambeem" und "Dramshare" verschafft Dreambeem.com dem User ein informatives';
        $rootScope.ogDescription = desc.substr(0,139);
        $rootScope.ogImage =  'https://www.dreambeem.com/images/bp/tipps/beemline.jpg';
        $rootScope.ogType = 'website';
        $rootScope.ogUrl = $location.absUrl();



        $scope.FBLogin = function () {
            var uri = encodeURI('https://dreams.dreambeem.com/login/');
            var uniqueState = Math.floor((Math.random() * 1000) + 1000000000);
            Facebook.getLoginStatus(function(response) {
                console.log(response);
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
                $scope.newsCount = data1;
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
                        console.log(data1);
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

        $scope.banners = function() {

            var width = $(window).width();

            var banner = '<!-- BEGIN PARTNER PROGRAM - DO NOT CHANGE THE PARAMETERS OF THE HYPERLINK --> <script type="text/javascript" src="http://banners.webmasterplan.com/view.asp?ref=713104&js=1&site=10953&b=143&target=_blank&title=FlixBus+-+Einfach+Busfahren" ></script><noscript><a href="http://partners.webmasterplan.com/click.asp?ref=713104&site=10953&type=b143&bnb=143" target="_blank"> <img src="http://banners.webmasterplan.com/view.asp?ref=713104&site=10953&b=143" border="0" title="FlixBus - Einfach Busfahren" alt="FlixBus - Einfach Busfahren" width="906" height="266" /></a></noscript> <!-- END PARTNER PROGRAM -->';

            postscribe('#leaderBoardBottom', '' + banner + '', {
                error: function(e) {
                    console.log(e);
                },
                done: function() {
                    console.log("postscribe work");
                }
            });
        };

        $scope.openMenu = function($mdMenu, ev) {
            var originatorEv;

            originatorEv = ev;
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
  });
