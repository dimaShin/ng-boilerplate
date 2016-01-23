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

    UserDetailsCtrl.prototype.save = function ($ev) {
        $ev.preventDefault();
        if (this.form.$invalid) {
            this.form.$setDirty();
            return;
        }

        this.user.$put().$promise
            .finally(() => {
                debugger
                console.log('data saved');
            })
            .then(() => {
                debugger
                console.log('data saved');
            }).catch(err => {
                debugger
                console.log('err: ', err);
            });
    }

}(window.angular));
