
describe('romanNumeralTranslatorService', function() {
  "use strict";

  beforeEach(module('myApp.view3'));

  var service;

  beforeEach(inject(function(romanNumeralTranslatorService) {

    service = romanNumeralTranslatorService;
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should return empty when equal to 0 ', function() {
  var a = service.translate(0);
  	expect(a).toEqual('');
  });

  it('should return empty string if less than 0 ', function() {
  var a = service.translate(-1);
  	expect(a).toEqual('');
  });

  it('should return index value of array ', function() {
  	var a = service.translate(4);
  	expect(a).toEqual('IV');
  })

   it('should return expected string if less than 40', function() {
  	var a = service.translate(20);
  	expect(a).toEqual('XX');
  })

    it('should return expected string if less than 50', function() {
  	var b = service.translate(40);
  	expect(b).toEqual('XL');
  })

    it('should return expected string if less than 90', function() {
  	var b = service.translate(60);
  	expect(b).toEqual('LX');
  })

   it('should return expected string if less than 100', function() {
  	var b = service.translate(92);
  	expect(b).toEqual('XCII');
  })

   it('should return expected string if less than 400', function() {
  	var b = service.translate(200);
  	expect(b).toEqual('CC');
  })

   it('should return expected string if less than 490', function() {
  	var b = service.translate(450);
  	expect(b).toEqual('CDL');
  })

   it('should return expected string if less than 500', function() {
  	var b = service.translate(495);
  	expect(b).toEqual('XDV');
  })

   it('should return expected string if less than 900', function() {
  	var b = service.translate(600);
  	expect(b).toEqual('DC');
  })

   it('should return expected string if less than 100', function() {
  	var b = service.translate(950);
  	expect(b).toEqual('CML');
  })

   it('should return expected string if greater than 3888', function() {
  	var b = service.translate(3000);
    expect(service.translate).toThrowError();
  })


});
