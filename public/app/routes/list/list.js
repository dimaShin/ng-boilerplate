;(function (ng) {

  ng.module('app').controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['$injector'];
  function ListCtrl($injector) {
    this._injectDependencies($injector);
    this._init();
  }

  ListCtrl.prototype._injectDependencies = function ($injector) {
  };

  ListCtrl.prototype._init = function () {

  };

}(window.angular));
