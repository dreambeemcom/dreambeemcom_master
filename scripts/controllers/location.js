'use strict';

angular.module('dreambeemcomApp')
  .controller('LocationCtrl', function ($http, $scope, $location, stkHttpService, $rootScope) {
        $scope.isCurrentPath = function (path) {
            return $location.path() === path;
        };

        $scope.showSubMenu = function(category) {

            var subMenus = [
                'sub-menu-sport',
                'sub-menu-kleidung',
                'sub-menu-telekommunikation',
                'sub-menu-computer',
                'sub-menu-haushalt',
                'sub-menu-beauty',
                'sub-menu-auto',
                'sub-menu-heimwerker',
                'sub-menu-wohnen',
                'sub-menu-uhren',
                'sub-menu-buero',
                'sub-menu-tierwelt'
            ];

            var rootMenus = [
                'sport',
                'kleidung',
                'telekommunikation',
                'computer',
                'haushalt',
                'beauty',
                'auto',
                'heimwerker',
                'wohnen',
                'uhren',
                'buero',
                'tierwelt'
            ];

            switch(category) {
                case 'sport':
                    var subMenuCategory = 'sub-menu-sport';
                    var rootMenuCategory = 'sport';
                    delete subMenus[0];

                    if(!angular.isDefined($scope.sportCategories)) {
                        var stkService = stkHttpService.getSportCategories();
                        stkService.then(function(data) {
                            $scope.sportCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[0];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'kleidung':
                    var subMenuCategory = 'sub-menu-kleidung';
                    var rootMenuCategory = 'kleidung';
                    delete subMenus[1];

                    if(!angular.isDefined($scope.kleidungCategories)) {
                        var stkService = stkHttpService.getKleidungCategories();
                        stkService.then(function(data) {
                            $scope.kleidungCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[1];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'telekommunikation':
                    var subMenuCategory = 'sub-menu-telekommunikation';
                    var rootMenuCategory = 'telekommunikation';
                    delete subMenus[2];

                    if(!angular.isDefined($scope.telekommunikationCategories)) {
                        var stkService = stkHttpService.getTelekommunikationCategories();
                        stkService.then(function(data) {
                            $scope.telekommunikationCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[2];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'computer':
                    var subMenuCategory = 'sub-menu-computer';
                    var rootMenuCategory = 'computer';
                    delete subMenus[3];

                    if(!angular.isDefined($scope.computerCategories)) {
                        var stkService = stkHttpService.getComputerCategories();
                        stkService.then(function(data) {
                            $scope.computerCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[3];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'haushalt':
                    var subMenuCategory = 'sub-menu-haushalt';
                    var rootMenuCategory = 'haushalt';
                    delete subMenus[4];

                    if(!angular.isDefined($scope.haushaltCategories)) {
                        var stkService = stkHttpService.getHaushaltCategories();
                        stkService.then(function(data) {
                            $scope.haushaltCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[4];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'beauty':
                    var subMenuCategory = 'sub-menu-beauty';
                    var rootMenuCategory = 'beauty';
                    delete subMenus[5];

                    if(!angular.isDefined($scope.beautyCategories)) {
                        var stkService = stkHttpService.getBeautyCategories();
                        stkService.then(function(data) {
                            $scope.beautyCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[5];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'auto':
                    var subMenuCategory = 'sub-menu-auto';
                    var rootMenuCategory = 'auto';
                    delete subMenus[6];

                    if(!angular.isDefined($scope.autoCategories)) {
                        var stkService = stkHttpService.getAutoCategories();
                        stkService.then(function(data) {
                            $scope.autoCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[6];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'heimwerker':
                    var subMenuCategory = 'sub-menu-heimwerker';
                    var rootMenuCategory = 'heimwerker';
                    delete subMenus[7];

                    if(!angular.isDefined($scope.heimwerkerCategories)) {
                        var stkService = stkHttpService.getHeimwerkerCategories();
                        stkService.then(function(data) {
                            $scope.heimwerkerCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[7];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'wohnen':
                    var subMenuCategory = 'sub-menu-wohnen';
                    var rootMenuCategory = 'wohnen';
                    delete subMenus[8];

                    if(!angular.isDefined($scope.wohnenCategories)) {
                        var stkService = stkHttpService.getWohnenCategories();
                        stkService.then(function(data) {
                            $scope.wohnenCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[8];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'uhren':
                    var subMenuCategory = 'sub-menu-uhren';
                    var rootMenuCategory = 'uhren';
                    delete subMenus[9];

                    if(!angular.isDefined($scope.uhrenCategories)) {
                        var stkService = stkHttpService.getUhrenCategories();
                        stkService.then(function(data) {
                            $scope.uhrenCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[9];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'buero':
                    var subMenuCategory = 'sub-menu-buero';
                    var rootMenuCategory = 'buero';
                    delete subMenus[10];

                    if(!angular.isDefined($scope.bueroCategories)) {
                        var stkService = stkHttpService.getBueroCategories();
                        stkService.then(function(data) {
                            $scope.bueroCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[10];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
                case 'tierwelt':
                    var subMenuCategory = 'sub-menu-tierwelt';
                    var rootMenuCategory = 'tierwelt';
                    delete subMenus[11];

                    if(!angular.isDefined($scope.tierweltCategories)) {
                        var stkService = stkHttpService.getTierweltCategories();
                        stkService.then(function(data) {
                            $scope.tierweltCategories = data;
                        });
                    }

                    for(var i=0;i<subMenus.length;i++) {
                        var subMenu = document.getElementById(subMenus[i]);
                        $(subMenu).removeClass('dna');
                        $(subMenu).addClass('dno');
                    }

                    delete rootMenus[11];
                    for(var j=0;j<subMenus.length;j++) {
                        var rootMenu = document.getElementById(rootMenus[j]);
                        $(rootMenu).removeClass('active');
                    }
                break;
            }

            var subMenu = document.getElementById(subMenuCategory);
            $(subMenu).removeClass('dno');
            $(subMenu).addClass('dna');

            var subMenu1 = document.getElementById('sub-menu-sport1');
            $(subMenu1).removeClass('dno');
            $(subMenu1).addClass('dna');
            var rootMenu = document.getElementById(rootMenuCategory);
            $(rootMenu).addClass('active');
        }

        $scope.hideSubMenu = function(category) {
            switch(category) {
                case 'sport':
                    var subMenuCategory = 'sub-menu-sport';
                    var rootMenuCategory = 'sport';
                    break;
                case 'kleidung':
                    var subMenuCategory = 'sub-menu-kleidung';
                    var rootMenuCategory = 'kleidung';
                    break;
                case 'telekommunikation':
                    var subMenuCategory = 'sub-menu-telekommunikation';
                    var rootMenuCategory = 'telekommunikation';
                    break;
                case 'computer':
                    var subMenuCategory = 'sub-menu-computer';
                    var rootMenuCategory = 'computer';
                    break;
                case 'haushalt':
                    var subMenuCategory = 'sub-menu-haushalt';
                    var rootMenuCategory = 'haushalt';
                    break;
                case 'beauty':
                    var subMenuCategory = 'sub-menu-beauty';
                    var rootMenuCategory = 'beauty';
                    break;
                case 'auto':
                    var subMenuCategory = 'sub-menu-auto';
                    var rootMenuCategory = 'auto';
                    break;
                case 'heimwerker':
                    var subMenuCategory = 'sub-menu-heimwerker';
                    var rootMenuCategory = 'heimwerker';
                    break;
                case 'wohnen':
                    var subMenuCategory = 'sub-menu-wohnen';
                    var rootMenuCategory = 'wohnen';
                    break;
                case 'uhren':
                    var subMenuCategory = 'sub-menu-uhren';
                    var rootMenuCategory = 'uhren';
                    break;
                case 'buero':
                    var subMenuCategory = 'sub-menu-buero';
                    var rootMenuCategory = 'buero';
                    break;
                case 'tierwelt':
                    var subMenuCategory = 'sub-menu-tierwelt';
                    var rootMenuCategory = 'tierwelt';
                break;
            }

            var subMenu = document.getElementById(subMenuCategory);
            $(subMenu).removeClass('dna');
            $(subMenu).addClass('dno');
            var rootMenu = document.getElementById(rootMenuCategory);
            $(rootMenu).removeClass('active');
        }

        String.prototype.lowerFirstLetter = function() {
            return this.charAt(0).toLowerCase() + this.slice(1);
        }
  });
