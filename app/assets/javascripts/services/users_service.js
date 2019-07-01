window.services.service('UsersService', [
  '$http',
  function (http) {
    'use strict';

    return {
      get: function () {
        return http.get('/api/v1/users');
      }
    };
  }
]);