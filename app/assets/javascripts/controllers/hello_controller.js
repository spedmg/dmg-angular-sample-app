window.controllers.controller('HelloController', [
  '$scope',
  'Greeting',
  function (scope, greeting) {
    scope.greeting = greeting.data;
  }
]);