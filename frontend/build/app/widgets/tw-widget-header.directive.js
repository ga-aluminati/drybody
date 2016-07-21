(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('twWidgetHeader', twWidgetHeader);

  /* @ngInject */
  function twWidgetHeader() {
    //Usage:
    //<div tw-widget-header title="vm.map.title"></div>
    // Creates:
    // <div tw-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var directive = {
      scope: {
        'title': '@',
        'subtitle': '@',
        'rightText': '@',
        'allowCollapse': '@'
      },
      templateUrl: 'app/widgets/widget-header.html',
      restrict: 'EA',
      link: link
    };
    return directive;

    function link(scope, element, attr) {
      scope.toggleContent = function() {
        if (scope.allowCollapse === 'true') {
          var content = angular.element(element).siblings('.widget-content');
          content.toggle();
        }
      };
    }
  }
})();
