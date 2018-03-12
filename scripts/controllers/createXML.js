'use strict';

angular.module('dreambeemcomApp')
    .controller('createXMLCtrl', function ($scope, $location, $timeout, $window, stkHttpService) {

        var stkService = stkHttpService.getXMLProducts(100);
        //var stkService = stkHttpService.updateCategories();
        stkService.then(function(data) {
            if(data) {
                console.log(data);


                var sitemapData = '';
                for(var i = 0; i < data.data.length;i++) {
                    if(data.data[i].productId.length > 0 && data.data[i].title.length > 0) {
                        var options = {
                            lang: 'de',
                            maintainCase: true,
                            separator: '-'
                        };

                        var getSlug = createSlug(options);

                        var title = getSlug(data.data[i].title, options);

                        sitemapData += ' <url><loc>https://www.dreambeem.com/' + title + '/' + data.data[i].productId + '/181/</loc></url>'+'\n';

                    }
                }

                var stkService = stkHttpService.makeSitemap(sitemapData);
                stkService.then(function(data) {
                    alert('made!');
                });
            }
        });
    });
