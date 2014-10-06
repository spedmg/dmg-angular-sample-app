window.services.service('HelloService', [
  '$http',
  function (http) {
    'use strict';

    return {
      get: function () {
        return http.get('/api/v1/hello');
      }
    };
  }
]);