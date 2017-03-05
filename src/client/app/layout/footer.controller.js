(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$state', '$timeout', '$log', 'routerHelper'];
    /* @ngInject */
    function FooterController($scope, $state, $timeout, $log, routerHelper) {
        var vm = this;
        
        activate();

        //////////////

        function activate() { 
           $log.debug('footer activated');
        };

       
    };
})();
