;(function (ng) {
  "use strict";

  ng.module('app').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$injector'];
  function PostsCtrl($injector) {
    this._injectDependencies($injector);
    this._init();
  }

  PostsCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
  };

  PostsCtrl.prototype._init = function () {
    this.posts = this._getPosts();
    this.users = this._getUsers();
  };

  PostsCtrl.prototype._getPosts = function () {
    return this.API.posts.query({userId: 1});
  };

  PostsCtrl.prototype._getUsers = function () {
    return this.API.users.query();
  };

}(window.angular));
