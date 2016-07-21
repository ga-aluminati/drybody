(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('twImgPerson', twImgPerson);

  twImgPerson.$inject = ['config'];
  /* @ngInject */
  function twImgPerson(config) {
    //Usage:
    //<img tw-img-person="{{person.imageSource}}"/>
    var basePath = config.imageBasePath;
    var unknownImage = config.unknownPersonImageSource;
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
      attrs.$observe('twImgPerson', function(value) {
        value = basePath + (value || unknownImage);
        attrs.$set('src', value);
      });
    }
  }
})();
