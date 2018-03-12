'use strict';

/**
 * @ngdoc function
 * @name dreambeemcomApp.controller:SlidesCtrl
 * @description
 * # SlidesCtrl
 * Controller of the dreambeemcomApp
 */
angular.module('dreambeemcomApp')
  .controller('SlidesCtrl', function ($scope) {
        $scope.slides = [
            'http://www.newsbeem.com/images/slider/products_auto.png',
            'http://www.newsbeem.com/images/slider/products_beauty.png',
            'http://www.newsbeem.com/images/slider/products_buero.png',
            'http://www.newsbeem.com/images/slider/products_computer.png',
            'http://www.newsbeem.com/images/slider/products_Haushaltsgeraete.png',
            'http://www.newsbeem.com/images/slider/products_heimwerker.png',
            'http://www.newsbeem.com/images/slider/products_kleidung.png',
            'http://www.newsbeem.com/images/slider/products_moebel.png',
            'http://www.newsbeem.com/images/slider/products_telekommunikation.png',
            'http://www.newsbeem.com/images/slider/products_tierwelt.png',
            'http://www.newsbeem.com/images/slider/products_uhren.png'
        ];
  });
