(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
  function Config ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/users');

    $stateProvider.state('home', {
      template: '<ui-view />'
    })
    .state('users', {
      parent: 'home',
      url: '/users',
      templateUrl: '/app/routes/users/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'ctrl'
    })
    .state('posts', {
      parent: 'home',
      url: 'users/:user_id/posts/',
      templateUrl: '/app/routes/posts/posts.html',
      controller: 'PostsCtrl',
      controllerAs: 'ctrl'
    });

  }

}(window.angular));
