(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$log', '$rootScope', '$timeout', 'config', 'logger'];
    /* @ngInject */
    function ShellController($log, $rootScope, $timeout, config, logger) {
        var vm = this;
       
        vm.navline = {
            title: config.appTitle
        };

        activate();
 
        function activate() {
            $log.info('layout activated')
        };
    };
})();
