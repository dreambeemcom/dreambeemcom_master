'use strict';

/**
 * @ngdoc service
 * @name dreambeemcomApp.stkHttpService
 * @description
 * # stkHttpService
 * Service in the dreambeemcomApp.
 */
angular.module('dreambeemcomApp')
  .service('stkHttpService', function ($http) {
        this.sendMessage = function(contact) {
            if(contact) {
                return $http({
                    method: 'POST',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Contact/sendMessage',
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    data: contact
                }).then(function successCallback(response) {
                    console.log(response);
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.furnybeemConfirmation = function(id){
            return $http({
                method: 'POST',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Furnybeem/FurnybeemConfirmation',
                headers: {
                 'Content-Type':'application/x-www-form-urlencoded'
                 },
                data: id
            }).then(function successCallback(response) {
                console.log(response);
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.dreambeemConfirmation = function(id){
            return $http({
                method: 'POST',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Dreambeem/DreambeemConfirmation',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                data: id
            }).then(function successCallback(response) {
                console.log(response);
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.sellerLogin = function(email, pass) {
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/account/login?email='+encodeURI(email)+'&pass='+encodeURI(pass)
            }).then(function successCallback(response) {
                console.log(response);
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.checkLogin = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                crossDomain: true,
                url: 'https://api.dreambeem.com/Login/controlLogin'
            }).then(function successCallback(response) {
                console.log(response);
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getPartners = function () {
            return $http({
                method: 'GET',
                withCredentials: true,
                crossDomain: true,
                url: 'https://api.dreambeem.com/Partners/getPartners'
            }).then(function successCallback(response) {
                var response = response;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.controlLoginTwitter = function () {
            return $http({
                method: 'GET',
                withCredentials: true,
                crossDomain: true,
                url: 'https://api.dreambeem.com/Login/controlLoginTwitter'
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.TWLoginRet = function(ret){
            if(ret) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Login/TWLogin?rUrl='+encodeURIComponent(ret)
                }).then(function successCallback(response) {
                    var url = response.data.replace('string(1) "1"', "");
                    var response1 = url;
                    console.log(response1);
                    return response1;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getAutoCompleteSuggestions = function(query){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getAutoCompleteSuggestions?q='+encodeURI(query)
            }).then(function successCallback(response) {
                var suggestions = response.data.suggestions;
                return suggestions;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.searchFor = function(query){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getSearch?query='+ query
            }).then(function successCallback(response) {
                var foundProducts = response.data.products;
                return foundProducts;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getCategoryProducts1 = function(id,layer,start) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Products/getCategoryProducts1?id=' + id + '&l=' + layer + '&start=' + start + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    console.log(response);
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryHeader4 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/getCategoryHeader4?id=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryHeader3 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/getCategoryHeader3?id=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryHeader = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/getCategoryHeader2?id=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryHeader6 = function(id) {
            return $http({
                method: 'GET',
                url: 'https://api.dreambeem.com/Categories/getCategoryHeader6?id=' + id + ''
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getCategoryHeader5 = function(id) {
            return $http({
                method: 'GET',
                url: 'https://api.dreambeem.com/Categories/getCategoryHeader5?id=' + id + ''
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getCategoryPage7 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/get7Categories?id3=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryPage6 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/get6Categories?id3=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryPage5 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/get5Categories?id3=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryPage4 = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/get4Categories?id3=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getCategoryPage = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    url: 'https://api.dreambeem.com/Categories/get3Categories?id3=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getDreamProducts = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getDreamProducts'
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getDreamEvents = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Events/getDreamEvents'
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getDreamPapersCount = function(country){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Papers/getDreamPapersCount?country='+country
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getDreamPapersWithCountry = function(country){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Papers/getDreamPapersWithCountry?country='+country
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getDreamPapersCountries = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Papers/getDreamPapersCountries'
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.twitterAcceptBookingConfirmation = function(bid){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Booking/twitterAcceptBookingConfirmation?bid=' + bid
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.NewsCount = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Links/getNewsCount/'
            }).then(function successCallback(response) {
                var newsCount = response.data;
                return newsCount;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.facebookDisAcceptBookingConfirmation = function(bid) {
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Booking/disacceptFacebookBooking?bid=' + bid
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.twitterDisAcceptBookingConfirmation = function(bid) {
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Booking/disacceptTwitterBooking?bid=' + bid
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.facebookAcceptBookingConfirmation = function(bid){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Booking/facebookAcceptBookingConfirmation?bid=' + bid
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getBooking = function(bid){
            if(bid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Booking/getBooking?bid=' + bid
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.TWLogin = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Login/TWLogin'
            }).then(function successCallback(response) {
                var url = response.data.replace('string(1) "1"', "");
                var response1 = url;
                console.log(response1);
                return response1;
            }, function errorCallback(response) {
                throw response;
            });
        };


        this.getAutoCompleteSuggestions = function(query){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getAutoCompleteSuggestions?q='+encodeURI(query)
            }).then(function successCallback(response) {
                var suggestions = response.data.suggestions;
                return suggestions;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.searchFor = function(query,p){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getSearch?query='+ query + '&p=' + p
            }).then(function successCallback(response) {
                var foundProducts = response.data.products;
                return foundProducts;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getSimilarProducts = function(cid){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getSimilarProducts?cid='+ cid
            }).then(function successCallback(response) {
                var foundProduct = response.data.similarProducts;
                return foundProduct;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.searchCount = function(query){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getSearchCount?query='+ query
            }).then(function successCallback(response) {
                var foundProducts = response.data.products;
                return foundProducts;
            }, function errorCallback(response) {
                throw response;
            });
        };


        this.ShopsCount = function(){
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Products/getFinalShopsCount/'
                }).then(function successCallback(response) {
                    var shopCount = response.data.shopsCount;
                    return shopCount;
                }, function errorCallback(response) {
                    throw response;
                });
            };

        this.ProductsCount = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Products/getFinalProductCount/'
            }).then(function successCallback(response) {
                var productCount = response.data.productCount;
                return productCount;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.DreamsCount = function(){
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Dreams/getFinalDreamsCount/'
            }).then(function successCallback(response) {
                console.log(response);
                var productCount = response.data.dreamsCount;
                return productCount;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.deleteCartProduct = function(id,pid) {
            if(id) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Cart/deleteProduct?id=' + id + '&pid=' + pid + ''
                }).then(function successCallback(response) {
                    var res = response.data;
                    console.log(res);
                    return res;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getBeemlineSearch = function(search,qua) {
            if(search) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Beemline/searchConfig?search=' + encodeURI(search) + '&qua=' + qua
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };
        this.getBeemline = function(c,qua) {
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Beemline/getBeemlineProducts?catid=' + c + '&qua=' + qua
            }).then(function successCallback(response) {
                var response = response.data;
                console.log(response);
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.checkCheckout = function() {
            return $http({
                method: 'GET',
                withCredentials: true,
                crossDomain: true,
                url: 'https://api.dreambeem.com/Login/checkCheckout'
            }).then(function successCallback(response) {
                var response = response.data;
                console.log(response);
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getCartProductsSum = function(pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    crossDomain: true,
                    url: 'https://api.dreambeem.com/Cart/getCartProductsSum?pid=' + pid + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    console.log(response);
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
        };

        this.getCartCount = function() {
            return $http({
                method: 'GET',
                withCredentials: true,
                crossDomain: true,
                url: 'https://api.dreambeem.com/Cart/getCartCount'
            }).then(function successCallback(response) {
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getOldLink = function(id) {
            if(id) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Links/getOLink?id=' + id
                }).then(function successCallback(response) {
                    var response = response.data;
                    console.log(response);
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.checkShopBridge = function(pid) {
            if(pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Crawlerbridge/checkBridge?pid=' + pid
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getShopBridge = function(id,pid) {
            if(id && pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Crawlerbridge/bridge?pid=' + pid + '&id=' + id + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.amazon = function(q,p) {
              if(q) {
                  return $http({
                      method: 'GET',
                      withCredentials: true,
                      url: 'https://api.dreambeem.com/Amazon/search?q=' + encodeURI(q) + '&p=' + p
                  }).then(function successCallback(response) {
                      var response = response.data;
                      return response;
                  }, function errorCallback(response) {
                      throw response;
                  });
              }
        };

        this.addProduct2Cart = function(id,pid) {
            if(id && pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Cart/add?id=' + id + '&pid=' + pid
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.makeSitemap = function(s) {
              if(s) {
                  return $http({
                      method: 'GET',
                      withCredentials: true,
                      url: 'https://api.dreambeem.com/Sitemap/Google?s=' + encodeURI(s) + ''
                  }).then(function successCallback(response) {
                      var response = response.data;
                      return response;
                  }, function errorCallback(response) {
                      throw response;
                  });
              }
        };

        this.getXMLProducts = function(q) {
            return $http({
                method: 'GET',
                withCredentials: true,
                url: 'https://api.dreambeem.com/Shop/getProducts?qua=' + q + '',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then(function successCallback(response) {
                console.log(response);
                var response = response.data;
                return response;
            }, function errorCallback(response) {
                throw response;
            });
        };

        this.getSimilarProducts = function(pid, proid, catid, dCount) {
            if(pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Shop/getSimilarProducts?pid=' + proid + '&p=' + pid + '&catid=' + catid + '&count=' + dCount + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getSimilarProductsCount = function(pid, proid, catid) {
            if(pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Shop/getSimilarProductsCount?pid=' + proid + '&p=' + pid + '&catid=' + catid + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };

        this.getDreamProduct = function(pid, proid) {
            if(pid) {
                return $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'https://api.dreambeem.com/Shop/getDreamProduct?pid=' + proid + '&p=' + pid + ''
                }).then(function successCallback(response) {
                    var response = response.data;
                    return response;
                }, function errorCallback(response) {
                    throw response;
                });
            }
        };
  });
