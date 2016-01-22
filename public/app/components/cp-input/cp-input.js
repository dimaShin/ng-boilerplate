;(function (ng) {
  "use strict";
  console.log('cp-inout');
  ng.module('app').directive('cpInput', function () {
    return {
      restrict: 'E',
      transclude: true,
      require: '^form',
      scope: {
        name: '@',
        label: '@label'
      },
      link: ($scope, $el, $attr, form) => {
        $scope.el = form[$scope.name];
      },
      templateUrl: 'app/components/cp-input/cp-input.html',
      controller: ['$scope', ($scope) => {
        $scope.errorMessages = {
          required: 'This field is required.',
          email: 'Please, enter a valid email.'
        }
      }]
    };
  });

}(window.angular));