(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: 'Home'
                    }
                }
            }
            /*      SHIM $state - for use at times where fallback,
            //             routing on the server is not an option.
            //
            //      {
            //          state: 'home.view',
            //          config: {
            //              url: '/',
            //              templateUrl: 'app/home/home.html',
            //              controller: 'HomeController',
            //              controllerAs: 'vm',
            //              title: 'home',
            //              settings: {
            //                  content: 'Home'
            //            }
            //         }
            //      }
            */
        ];
    }
})();
