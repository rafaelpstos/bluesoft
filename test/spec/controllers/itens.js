'use strict';

describe('Controller: ItensCtrl', function () {

  // load the controller's module
  beforeEach(module('bluesoftApp'));

  var ItensCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItensCtrl = $controller('ItensCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ItensCtrl.awesomeThings.length).toBe(3);
  });
});
