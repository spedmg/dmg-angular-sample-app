window.controllers.controller('UsersController', [
  '$scope',
  'UsersService',
  function (scope, usersService) {
    'use strict';

    var init = function () {
      usersService.get()
        .then(function (response) {
          scope.users = response.data.users;
        })
        .catch(function (error) {
          scope.usersError = error;
        });
    }

    init();
  }
]);
