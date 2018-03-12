

'use strict';

angular.module('dreambeemcomApp')
    .service('stkMetaService', function($location) {
        var title = '';
        var description = '';
        return {
            title: function() { return title; },
            setTitle: function(newTitle) { title = newTitle; },
            description: function() { return description; },
            setDescription: function(newDescription) { description = newDescription; }
        };
    });
