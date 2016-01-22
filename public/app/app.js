(function (ng) {
  "use strict";

  ng.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngResource'
  ]).run(['$rootScope', ($rootScope) => {
    $rootScope.$on('$stateChangeError', () => {
      console.log(arguments);
    });

    $rootScope.$on('$stateChangeStart', ($ev, toState) => {
      //console.log(toState);
    });

    $rootScope.$on('$stateChangeStart', ($ev, toState, toStateParams, fromState, fromStateParams) => {
      //console.log($ev, toState, toStateParams, fromState, fromStateParams);
    });
  }]);

}(window.angular));
