window.controllers.controller('HelloController', [
  '$scope',
  'Greeting',
  function (scope, greeting) {
    'use strict';

    scope.greeting = greeting.data;
  }
]);
