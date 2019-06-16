describe('services.UserService', function () {
  beforeEach(module('services'));

  beforeEach(
    inject(function ($injector) {
      this.service = $injector.get('UserService');
      this.http = $injector.get('$httpBackend');
    })
  );

  afterEach(function () {
    this.http.verifyNoOutstandingExpectation();
    this.http.verifyNoOutstandingRequest();
  });

  describe('.get', function () {
    it('sends a get request to the correct github api route', function () {
      this.http.expectGET('https://api.github.com/users').respond(200);

			this.service.get().then(function(data) {
        expect(data.status).toEqual(200);
      });

			this.http.flush();
    });
  });
});
