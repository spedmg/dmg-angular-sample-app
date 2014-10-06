window.services.service('HelloService', [
  '$http',
  function (http) {

    return {
      get: function () {
        return http.get('/api/v1/hello');
      }
    };
  }
]);