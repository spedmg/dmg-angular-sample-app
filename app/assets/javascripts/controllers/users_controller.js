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
          scope.users = response.data.users.slice(0, 5);
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
              repoLimit: 5,
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

    scope.toggleRepoLimit = function (user) {
      user.repoLimit = user.repoLimit === 5 ? 30 : 5;
    }

    init();
  }
]);
