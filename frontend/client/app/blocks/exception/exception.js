(function() {
    'use strict';

/** 
* Code originally generated with the Hottowel Generator, by John Pappa, and adapted
* Source: Google Chrome source code https://github.com/johnpapa/generator-hottowel
* retrieved on, July 21, 2016. 
*/

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                var thrownDescription;
                var newMessage;
                if (e.data && e.data.description) {
                    thrownDescription = '\n' + e.data.description;
                    newMessage = message + thrownDescription;
                }
                e.data.description = newMessage;
                logger.error(newMessage);
                return $q.reject(e);
            };
        }
    }
})();
