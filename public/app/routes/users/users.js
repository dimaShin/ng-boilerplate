;(function (ng) {
  "use strict";

  ng.module('app').controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['$injector'];
  function UsersCtrl($injector, routeData, $stateParams) {
    this._injectDependencies($injector);
    this._init(routeData, $stateParams);
  }

  UsersCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
  };

  UsersCtrl.prototype._init = function () {
    this.users = this._getUsers();
  };

  UsersCtrl.prototype._getUsers = function () {
    return this.API.users.query();
  }

}(window.angular));
