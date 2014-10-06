var controllers = angular.module('controllers', []);

var services = angular.module('services', []);

var sample = angular.module('sample', ['ng', 'ui.router', 'controllers', 'services']);

sample.config(
  [
    '$locationProvider',
    function (locationProvider) {
      locationProvider.html5Mode(true);
    }
  ]);
