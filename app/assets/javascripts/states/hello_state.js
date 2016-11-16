window.sample.config([
  "$stateProvider",
  function (stateProvider) {
    'use strict';

    stateProvider
    .state('hello', {
      url: '/hello',
      views: {
        'content': {
          controller: 'HelloController',
          //resolve: {
          //  Greeting: [
          //    'HelloService',
          //      function (helloService) {
          //        return helloService.get();
          //      }
          //  ]
          //},
          templateUrl: '/hello/index.html'
        }
      }
    });
}]);
