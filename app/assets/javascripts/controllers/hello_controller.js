window.controllers.controller('HelloController', [
  '$scope',
  'HelloService',
  function (scope, helloService) {
    'use strict';

    var init = function () {
      helloService.get()
      .then(function (response) {
        scope.greeting = response.data.hello;
      });
    }

    init();
  }
]);
