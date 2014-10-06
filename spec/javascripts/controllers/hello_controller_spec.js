describe('controllers.HelloController', function () {
  beforeEach(module('controllers'));

  beforeEach(
    inject(function ($injector) {
      this.controller = $injector.get('$controller');
      this.scope = $injector.get('$rootScope').$new();

      this.greeting = { data: 'foo' };

      this.controller('HelloController', {
        $scope: this.scope,
        Greeting: this.greeting
      });
    })
  );

  it('should set greeting', function () {
    expect(this.scope.greeting).toBe(this.greeting.data);
  });
});
