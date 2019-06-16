describe('UserController', function() {
  beforeEach(module('controllers'));
  beforeEach(module('services'));

  var testData = [{ login: 'mojombo', id: 1 }, { login: 'defunkt', id: 2 }];
  var $controller, $rootScope;

  beforeEach(inject(function($injector, _$controller_, _$rootScope_) {
    this.http = $injector.get('$httpBackend');
    this.http.expectGET('https://api.github.com/users').respond(200, testData);
    this.service = $injector.get('UserService');
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('$scope.data', function() {
		it('is intially empty', function() {
			var $scope = $rootScope.$new();
			var c = $controller('UserController', {
				$scope: $scope,
			});
			expect($scope.data).toEqual([]);
		});

    it('returns data', function() {
      this.service.get().then(function(data) {
        expect(data.data).toEqual(testData);
      });

      this.http.flush();
    });

  });
});
