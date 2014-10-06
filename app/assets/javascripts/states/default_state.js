window.sample.config(
  [
    "$stateProvider",
    function (stateProvider) {
      'use strict';

      stateProvider
        .state('default',
               {
                 url: '/',
                 views: {
                   'content': {
                     template: ''
                   }
                 }
               });
    }]);
