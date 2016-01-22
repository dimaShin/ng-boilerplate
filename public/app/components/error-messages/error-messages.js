;(function (ng) {
  "use strict";
  ng.module('app').directive('errorMessages', function () {
    return {
      restrict: 'E',
      scope: {
        errors: '='
      },
      templateUrl: 'app/components/error-messages/error-messages.html',
      controller: ['$scope', ($scope) => {
        $scope.errorMessages = {
          required: 'This field is required.',
          email: 'Please, enter a valid email.'
        }
      }]
    };
  });

}(window.angular));