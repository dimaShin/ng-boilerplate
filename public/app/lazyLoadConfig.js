(function (ng) {
  "use strict";

  ng.module('app').config(Config);
  Config.$inject = ['$ocLazyLoadProvider'];
  function Config($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      events: true,
      modules: [
        {
          name: 'nvd3',
          files: [
            'bower_components/d3/d3.min.js',
            'bower_components/nvd3/build/nv.d3.js',
            'bower_components/angular-nvd3/dist/angular-nvd3.js',
            'bower_components/nvd3/build/nv.d3.min.css'
          ],
          serie: true
        },
        {
          name: 'datepicker',
          files: [
            'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css',
            'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
          ]
        }
      ]
    });
  }
}(window.angular));