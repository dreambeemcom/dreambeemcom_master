'use strict';
    /**
     * @ngdoc overview
     * @name dreambeemcomApp
     * @description
     * # dreambeemcomApp
     *
     * Main module of the application.
     */
    angular.module('dreambeemcomApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngCountUp',
        'ngMaterial',
        'facebook',
        'googlechart',
        'ngMagnify'
    ])
        .config(function ($routeProvider, $locationProvider, FacebookProvider,$httpProvider) {
            FacebookProvider.init('1107023486046982');

            $locationProvider.hashPrefix('!');
            $locationProvider.html5Mode(true);


            $routeProvider
                .when('/beemline', {
                    templateUrl: '/views/beemline.html',
                    controller: 'BeemlineCtrl',
                    controllerAs: 'beemline'
                })
                .when('/acceptBooking', {
                    templateUrl: '/views/acceptBooking.html',
                    controller: 'AcceptBookingCtrl',
                    controllerAs: 'acceptbooking'
                })
                .when('/disacceptBooking', {
                    templateUrl: '/views/disacceptBooking.html',
                    controller: 'DisAcceptBookingCtrl',
                    controllerAs: 'disacceptbooking'
                })
                .when('/beemline', {
                    templateUrl: '/views/beemline.html',
                    controller: 'BeemlineCtrl',
                    controllerAs: 'beemline'
                })
                .when('/beemline/amazon', {
                    templateUrl: '/views/searchamazon.html',
                    controller: 'BeemlineAmazonCtrl',
                    controllerAs: 'beemlineamazon'
                })
                .when('/beemline/amazon/:search', {
                    templateUrl: '/views/searchamazon.html',
                    controller: 'BeemlineAmazonCtrl',
                    controllerAs: 'beemlineamazon'
                })
                .when('/beemline/amazon/:search/:page', {
                    templateUrl: '/views/searchamazon.html',
                    controller: 'BeemlineAmazonCtrl',
                    controllerAs: 'beemlineamazon'
                })
                .when('/beemline/ebay', {
                    templateUrl: '/views/searchebay.html',
                    controller: 'BeemlineEbayCtrl',
                    controllerAs: 'beemlineebay'
                })
                .when('/beemline/amazon-ebay', {
                    templateUrl: '/views/searchamazonebay.html',
                    controller: 'BeemlineAmazonEbayCtrl',
                    controllerAs: 'beemlineamazonebay'
                })
                .when('/beemline/search/:search', {
                    templateUrl: '/views/beemline.html',
                    controller: 'BeemlineCtrl',
                    controllerAs: 'beemline'
                })
                .when('/beemline/:category/:id/', {
                    templateUrl: '/views/beemline.html',
                    controller: 'BeemlineCtrl',
                    controllerAs: 'beemline'
                })
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/sell-events', {
                    templateUrl: 'views/dream-events-sell.html',
                    controller: 'DreamEventsSellCtrl',
                    controllerAs: 'DreamEventsSell'
                })
                .when('/presse', {
                    templateUrl: 'views/presse.html',
                    controller: 'PresseCtrl',
                    controllerAs: 'presse'
                })
                .when('/sell-products', {
                    templateUrl: 'views/dream-products-sell.html',
                    controller: 'DreamProductsSellCtrl',
                    controllerAs: 'DreamProductsSell'
                })
                .when('/ab/m/:title/:id/', {
                    templateUrl: 'views/ab_m.html',
                    controller: 'Ab_mCtrl',
                    controllerAs: 'ab_m'
                })
                .when('/ab/l/:title/:id/', {
                    templateUrl: 'views/ab_l.html',
                    controller: 'Ab_lCtrl',
                    controllerAs: 'ab_l'
                })
                .when('/watch', {
                    templateUrl: 'views/watch.html',
                    controller: 'WatchCtrl',
                    controllerAs: 'watch'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl',
                    controllerAs: 'search'
                })
                .when('/createXML', {
                    templateUrl: 'views/XML.html',
                    controller: 'createXMLCtrl',
                    controllerAs: 'createXML'
                })
                .when('/shopchoose/shop/:shop/', {
                    templateUrl: '404.html',
                    controller: 'OldCategoryCtrl',
                    controllerAs: 'oldcategory'
                })
                .when('/about-us', {
                    templateUrl: 'views/aboutus.html',
                    controller: 'AboutusCtrl',
                    controllerAs: 'aboutus'
                })
                .when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactCtrl',
                    controllerAs: 'contact'
                })
                .when('/datasecurity', {
                    templateUrl: 'views/datasecurity.html',
                    controller: 'DataSecurityCtrl',
                    controllerAs: 'datasecurity'
                })
                .when('/faq', {
                    templateUrl: 'views/faq.html',
                    controller: 'FaqCtrl',
                    controllerAs: 'faq'
                })
                .when('/dreamlogin', {
                    templateUrl: 'views/login.html',
                    controller: 'DreamloginCtrl',
                    controllerAs: 'dreamlogin'
                })
                .when('/agb-events', {
                    templateUrl: 'views/agb-events.html',
                    controller: 'AgbEventsCtrl',
                    controllerAs: 'agbevents'
                })
                .when('/agb-products', {
                    templateUrl: 'views/agb-products.html',
                    controller: 'AgbProductsCtrl',
                    controllerAs: 'agbproducts'
                })
                .when('/partner', {
                    templateUrl: 'views/partner.html',
                    controller: 'PartnerCtrl',
                    controllerAs: 'partner'
                })
                .when('/dream-products', {
                    templateUrl: 'views/dream-products.html',
                    controller: 'DreamProductsCtrl',
                    controllerAs: 'dreamproducts'
                })
                .when('/dream-products/:title', {
                    templateUrl: 'views/dream-products.html',
                    controller: 'DreamProductsCtrl',
                    controllerAs: 'dreamProducts'
                })
                .when('/dream-events', {
                    templateUrl: 'views/dream-events.html',
                    controller: 'DreamEventsCtrl',
                    controllerAs: 'dreamEvents'
                })
                .when('/software-license', {
                    templateUrl: 'views/softwarelicense.html',
                    controller: 'SoftwareLicenseCtrl',
                    controllerAs: 'softwarelicense'
                })
                .when('/dreams-balance', {
                    templateUrl: 'views/dreams-balance.html',
                    controller: 'DreamsBalanceCtrl',
                    controllerAs: 'dreamsbalance'
                })
                .when('/dream-papers', {
                    templateUrl: 'views/dream-papers.html',
                    controller: 'DreamPapersCtrl',
                    controllerAs: 'dreamPapers'
                })
                .when('/dream-products-sell', {
                    templateUrl: 'views/dream-products-sell.html',
                    controller: 'DreamProductsSellCtrl',
                    controllerAs: 'dreamProductsSell'
                })
                .when('/dream-events-sell', {
                    templateUrl: 'views/dream-events-sell.html',
                    controller: 'DreamEventsSellCtrl',
                    controllerAs: 'dreamEventsSell'
                })
                .when('/dream-papers-sell', {
                    templateUrl: 'views/dream-papers-sell.html',
                    controller: 'DreamPapersSellCtrl',
                    controllerAs: 'dreamPapersSell'
                })
                .when('/impressum', {
                    templateUrl: 'views/impressum.html',
                    controller: 'ImpressumCtrl',
                    controllerAs: 'impressum'
                })
                .when('/furnybeem', {
                    templateUrl: 'views/furnybeemConfirmation.html',
                    controller: 'FurnybeemCtrl',
                    controllerAs: 'furnybeem'
                })
                .when('/dreambeem', {
                    templateUrl: 'views/dreambeemConfirmation.html',
                    controller: 'DreambeemCtrl',
                    controllerAs: 'dreambeem'
                })
                .when('/404', {
                    templateUrl: '404.html',
                    controller: '404Ctrl',
                    controllerAs: '404c'
                })
                .when('/wegweiser', {
                    templateUrl: 'views/wegweiser.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/dropshipping/', {
                    templateUrl: 'views/dropshipping.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/dreambeems-rolle/', {
                    templateUrl: 'views/dreambeemsrole.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/marketing/', {
                    templateUrl: 'views/marketing.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/chancen-auf-dem-markt/', {
                    templateUrl: 'views/cancen.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/social-media/', {
                    templateUrl: 'views/socialmedia.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/twitter-follower/', {
                    templateUrl: 'views/twitterfollower.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/twitter-messages/', {
                    templateUrl: 'views/twittermessages.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/wegweiser/dropshipping-social-media/', {
                    templateUrl: 'views/dropshippingsocialmedia.html',
                    controller: 'WegweiserCtrl',
                    controllerAs: 'wegweiser'
                })
                .when('/tipps/kontakte/', {
                    templateUrl: 'views/kontakte.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/andere-social-media-kanaele/', {
                    templateUrl: 'views/socialmediakanaele.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/beemline/', {
                    templateUrl: 'views/tippsbeemline.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/immer-posten/', {
                    templateUrl: 'views/immerposten.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/facebook-gruppen/', {
                    templateUrl: 'views/facebookgruppen.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/viele-follower/', {
                    templateUrl: 'views/vielefollower.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/private-nachrichten/', {
                    templateUrl: 'views/pn.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps/facebook-seite/', {
                    templateUrl: 'views/facebookseite.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/tipps', {
                    templateUrl: 'views/tipps.html',
                    controller: 'TippsCtrl',
                    controllerAs: 'tipps'
                })
                .when('/shopchoose/mark/:markname/:shopid/', {
                    templateUrl: '404.html',
                    controller: 'MarkCtrl',
                    controllerAs: 'mark'
                })
                .when('/shopchoose/pagerCategory/:category/:categoryid/:title/:p/:pa/:page/', {
                    templateUrl: '404.html',
                    controller: 'OldCategoryCtrl',
                    controllerAs: 'oldcategory'
                })
                .when('/shopchoose/category/:category/:categoryid/:shopid/', {
                    templateUrl: '404.html',
                    controller: 'OldCategoryCtrl',
                    controllerAs: 'oldcategory'
                })
                .when('/shopchoose/pager/:name/:id/:lok/page/:p/', {
                    templateUrl: '404.html',
                    controller: 'OldCategoryCtrl',
                    controllerAs: 'oldcategory'
                })
                .when('/cat/pagersubsub/:pa/products/:ert/page/:p/', {
                    templateUrl: '404.html',
                    controller: 'OldCategoryCtrl',
                    controllerAs: 'oldcategory'
                })
                .when('/:title/:id/:pid', {
                    templateUrl: 'views/dreamproduct.html',
                    controller: 'DreamproductCtrl',
                    controllerAs: 'dreamproduct'
                })
                .otherwise({
                    redirectTo: '/404'
                });
        });
