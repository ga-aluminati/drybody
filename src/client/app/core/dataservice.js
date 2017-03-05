(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            /*  getOfferings: getOfferings */
            /*  getPeople: getPeople */
        };

        return service;

        /*

        function getOfferings() {

            return $http.get('/api/events/offerings)
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
         */
    }
})();
