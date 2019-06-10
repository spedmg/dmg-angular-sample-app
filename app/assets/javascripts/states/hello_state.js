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
          templateUrl: '/hello/index.html'
        }
      }
    });
}]);
