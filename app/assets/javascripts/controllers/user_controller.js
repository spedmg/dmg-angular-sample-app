window.controllers.controller('UserController', [
  '$scope',
  'UserService',
  function(scope, userService) {
    ('use strict');
		scope.data = [];

    var init = function() {
      userService.get().then(function(response) {
        scope.data = response.data;
        response.data.forEach(function(item, index) {
					userService.getUserInfo(item.url).then(function(res) {
						scope.data[index].info = res.data
					})
          userService.getUrls(item.repos_url).then(function(res) {
            scope.data[index].repos = res.data;
          });
        });
      });
    };

    init();
  }
]);
