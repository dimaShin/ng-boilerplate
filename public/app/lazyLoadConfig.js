(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  class Config {

    static $inject = ['$ocLazyLoadProvider'];

    constructor($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
        events: true,
        modules: [
          {
            name: 'socket.io',
            files: [CONFIG.apiUrl + '/socket.io/socket.io.js']
          },
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
            name: 'switchery',
            files: [
              'assets/plugins/switchery/js/switchery.min.js',
              'assets/plugins/ng-switchery/ng-switchery.js',
              'assets/plugins/switchery/css/switchery.min.css'
            ]
          },
          {
            name: 'line-icons',
            files: ['assets/plugins/simple-line-icons/simple-line-icons.css']
          },
          {
            name: 'nestable',
            files: [
              'bower_components/ng-nestable/lib/jquery.nestable.css',
              'bower_components/ng-nestable/lib/jquery.nestable.js',
              'bower_components/ng-nestable/src/angular-nestable.js'
            ]
          },
          {
            name: 'summernote',
            files: [
              'bower_components/summernote/dist/summernote-bs3.css',
              'bower_components/summernote/dist/summernote.css',
              'bower_components/summernote/dist/summernote.min.js',
              'bower_components/angular-summernote/dist/angular-summernote.min.js'
            ],
            serie: true // load in the exact order
          },
          {
            name: 'datepicker',
            files: [
              'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css',
              'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
            ]
          },
          {
            name: 'select2',
            files: [
              'bower_components/select2/select2.css',
              'bower_components/select2/select2-bootstrap.css',
              'bower_components/select2/select2.min.js',
              'bower_components/angular-ui-select2/src/select2.js'
            ],
            serie: true
          }
        ]
      });
    }
  }

  console.log(Config.$inject);
}(window.angular));