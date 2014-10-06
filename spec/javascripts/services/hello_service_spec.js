describe('services.HelloService', function () {
  beforeEach(module('services'));

  beforeEach(
    inject(function ($injector) {
      this.service = $injector.get('HelloService');
      this.http = $injector.get('$httpBackend');
    })
  );

  afterEach(function () {
    this.http.verifyNoOutstandingExpectation();
    this.http.verifyNoOutstandingRequest();
  });

  describe('.get', function () {
    it('sends a get request to the correct api route', function () {
      this.http.expectGET('/api/v1/hello').respond(200);

      this.service.get();

      this.http.flush();
    });
  });
});
