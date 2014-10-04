window.sample.config(
  [
    "$stateProvider",
    function (stateProvider) {
      'use strict';

      stateProvider
        .state('hello',
               {
                 url: '/hello',
                 views: {
                   'content': {
                     templateUrl: '/hello/index.html'
                   }
                 }
               });
    }]);
