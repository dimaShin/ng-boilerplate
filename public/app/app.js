(function (ng) {
  "use strict";

  ng.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngResource'
  ]).run(['$rootScope', ($rootScope) => {
    $rootScope.$on('$stateChangeError', ($ev, toState, toStateParams, fromState, fromStateParams, $error) => {
    });

    $rootScope.$on('$stateChangeStart', ($ev, toState, toStateParams, fromState, fromStateParams) => {
    });

    $rootScope.$on('$stateChangeStart', ($ev, toState, toStateParams, fromState, fromStateParams) => {
    });
  }]);

}(window.angular));
