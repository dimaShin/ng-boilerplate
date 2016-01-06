(function (ng) {
  "use strict";

  const app = ng.module('app', []);

  app.config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  });

}(window.angular));
