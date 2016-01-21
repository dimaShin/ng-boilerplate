(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
  function Config ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/list');

    $stateProvider.state('home', {
      template: '<ui-view />'
    })
    .state('list', {
      parent: 'home',
      url: '/list',
      templateUrl: '/app/routes/list/list.tpl.html',
      controller: 'ListCtrl',
      controllerAs: 'ctrl'
    })
    .state('details', {
      parent: 'home',
      url: '/list/:id',
      templateUrl: '/app/routes/details/details.tpl.html',
      controller: 'DetailsCtrl',
      controllerAs: 'ctrl'
    });

  }

}(window.angular));
