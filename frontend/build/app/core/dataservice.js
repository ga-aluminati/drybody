(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            /*  getContactLocation: getContactLocation */
            /*  getEvents: getEvents */
            /*  getOfferings: getOfferings */
            /*  getPeople: getPeople */
            /*  getPress: getPress */
        };

        return service;

        /* function getContactLocation() {
             return $http.get('/api/                     Google MAPS API')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                return exception.catcher('XHR Failed for getEvents')(error);
            }
            
        }
         
        function getEvents() {
            return $http.get('/api/events')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                return exception.catcher('XHR Failed for getEvents')(error);
            }
        }

        function getOfferings() {
                                 
            return $http.get('/api/events/offerings'                  Leverage Future Internal Events API    )
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                return exception.catcher('XHR Failed for getEvents')(error);
            }
        }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                return exception.catcher('XHR Failed for getPeople')(error);
            }
        }

        function getPress() {
            discover press
        }
         */
    }
})();
