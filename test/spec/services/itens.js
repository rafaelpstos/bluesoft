'use strict';

describe('Service: itens', function () {

  // load the service's module
  beforeEach(module('bluesoftApp'));

  // instantiate service
  var itens;
  beforeEach(inject(function (_itens_) {
    itens = _itens_;
  }));

  it('should do something', function () {
    expect(!!itens).toBe(true);
  });

});
