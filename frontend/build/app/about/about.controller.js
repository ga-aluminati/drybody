(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$q', 'dataservice', 'logger', 'routerHelper'];
    /* @ngInject */
    function AboutController($q, dataservice, logger, routerHelper) {
        var vm = this;
        vm.title = 'About';

        activate();

        function activate() { 
            logger.info('About screen activated');
        };
    };
})();
