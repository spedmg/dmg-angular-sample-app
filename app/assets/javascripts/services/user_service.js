window.services.service('UserService', [
  '$http',
  function (http) {
    'use strict';

    return {
      get: function () {
        return http.get('https://api.github.com/users');
			},
			getUserInfo: function(url) {
				return http.get(url)
			},
			getUrls: function(url) {
				return http.get(url)
			}
    };
  }
]);