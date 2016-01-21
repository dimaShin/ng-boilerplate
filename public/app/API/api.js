;(function (ng) {

  ng.module('app').service('API', ApiService);

  ApiService.$inject = ['$firebaseObject'];
  function ApiService ($firebaseObject) {
    "use strict";
    this.$firebaseObject = $firebaseObject;
    this.ref = new Firebase("resplendent-torch-7329.firebaseIO.com");
  }

  ApiService.prototype.get = function () {
    "use strict";
    return this.$firebaseObject(this.ref);
  }

}(window.angular));
