(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  function Config ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
      url: '/',
      template: '<ui-view />'
    })
    .state('view1', {
      parent: 'home',
      url: 'view1/',
      templateUrl: '/app/routes/view1/view1.tpl.html',
      controller: 'View1Ctrl',
      controllerAs: 'ctrl'
    })
    .state('view1', {
      parent: 'home',
      url: 'view2/',
      templateUrl: '/app/routes/view2/view2.tpl.html',
      controller: 'View2Ctrl',
      controllerAs: 'ctrl'
    });

  }

}(window.angular));
