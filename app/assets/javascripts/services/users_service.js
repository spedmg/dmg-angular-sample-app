window.services.service('UsersService', [
  '$http',
  function (http) {
    'use strict';

    return {
      getUsers: function () {
        return http.get('/api/v1/users');
      },
      getUser: function (username) {
        return http.get(`/api/v1/users/${username}`);
      },
      getUserRepos: function (username) {
        return http.get(`/api/v1/repos/${username}`);
      }
    };
  }
]);