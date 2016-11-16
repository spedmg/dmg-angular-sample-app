var controllers = window.angular.module('controllers', []);

var services = window.angular.module('services', []);

var sample = window.angular.module('sample', ['ng', 'ui.router', 'controllers', 'services']);

sample.config(
  [
    '$locationProvider',
    function (locationProvider) {
      'use strict';

      locationProvider.html5Mode({ enabled: true, requireBase: false });
    }
  ]);
