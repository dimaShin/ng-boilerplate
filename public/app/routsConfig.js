(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
  function Config ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/users');

    $stateProvider.state('home', {
      abstract: true,
      template: '<ui-view />'
    })
    .state('users', {
      parent: 'home',
      url: '/users',
      templateUrl: '/app/routes/users/list.html',
      controller: 'UsersListCtrl',
      controllerAs: 'ctrl'
    })
    .state('user-details', {
      parent: 'home',
      url: '/user/:id',
      templateUrl: '/app/routes/users/details.html',
      controller: 'UserDetailsCtrl',
      controllerAs: 'ctrl',
      resolve: {
        user: ['API', '$stateParams', (API, $params) => {
          return API.users.get({id: $params.id})
        }],
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'ngMessages'
          ]);
        }]
      }
    })
    .state('posts', {
      parent: 'home',
      url: '/:userId/posts/',
      templateProvider: (posts) => {
          console.log();
          return '<posts list="$resolve.posts" />'
      },
        resolve: {
            posts: ['API', '$stateParams', (API, $s) => {
                return API.users.getPosts({id: $s.userId});
            }]
        }
    });

  }

}(window.angular));
