;(function (ng) {
  "use strict";

  ng.module('app').controller('UserDetailsCtrl', UserDetailsCtrl);

  UserDetailsCtrl.$inject = ['$injector', 'user'];
  function UserDetailsCtrl($injector, user) {
    this._injectDependencies($injector);
    this._init(user);
  }

  UserDetailsCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
  };

  UserDetailsCtrl.prototype._init = function (user) {
    this.user = user;
  };

}(window.angular));
