;(function (ng) {
  "use strict";

  ng.module('app').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$injector'];
  function PostsCtrl($injector) {
    this._injectDependencies($injector);
  }

  PostsCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
  };

}(window.angular));
