window.controllers.controller('UsersController', [
  '$scope',
  'UsersService',
  function (scope, usersService) {
    'use strict';
    scope.usersTitle = 'Github Directory';

    var init = function () {
      usersService.getUsers()
        .then(function (response) {
          checkError(response.data);
          scope.users = response.data.users.slice(0, 2);
          return Promise.all(scope.users.map(function (user) {
            return usersService.getUser(user.login);
          }));
        })
        .then(function (response) {
          checkError(response.data);
          scope.users.forEach(function (user, idx, arr) {
            arr[idx] = { ...user, ...response[idx].data.user };
          });
          return Promise.all(scope.users.map(function (user) {
            return usersService.getUserRepos(user.login);
          }));
        })
        .then(function (response) {
          checkError(response.data);
          scope.users.forEach(function (user, idx, arr) {
            arr[idx] = {
              ...user,
              ...response[idx].data,
              stars: response[idx].data.repos.reduce(function (stars, repo) {
                return stars + repo.stargazers_count;
              }, 0)
            };
          });
        })
        .catch(function (error) {
          scope.usersError = error;
        });
    }

    var checkError = function (data = {}) {
      if (data.error) {
        throw new Error(data.error);
      }
    }

    init();
  }
]);
