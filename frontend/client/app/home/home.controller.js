(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'dataservice', 'logger', 'routerHelper'];
    /* @ngInject */
    function HomeController($q, dataservice, logger, routerHelper) {
        var vm = this;
        vm.title = 'Home';

        activate();

        function activate() { 
            logger.info('Home screen activated');
        };
    };
})();
