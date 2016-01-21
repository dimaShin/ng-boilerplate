;(function (ng) {
  ng.module('app').controller('DetailsCtrl', DetailsCtrl);

  DetailsCtrl.$inject = ['$injector'];
  function DetailsCtrl($injector) {
    this._injectDependencies($injector);
    this._init();
  }

  DetailsCtrl.prototype._injectDependencies = function ($injector) {
  };

  DetailsCtrl.prototype._init = function () {

  };
}(window.angular));
