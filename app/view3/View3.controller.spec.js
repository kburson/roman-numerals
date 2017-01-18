describe('View3Controller', function() {
	"use strict";

	 beforeEach(module('myApp.view3'));

	 var view3Ctrl ;

	 var romanNumeralTranslatorService;

	 beforeEach(inject(function($controller) {

     view3Ctrl = $controller('View3Controller');
  }));

	beforeEach(inject(function(_romanNumeralTranslatorService_) {

    romanNumeralTranslatorService = _romanNumeralTranslatorService_;
  }));

/*start*/
  describe('view3 controller', function(){

    it('should return the value of romanInteger in try block',function() {
    	spyOn(romanNumeralTranslatorService,'translate').and.returnValue();
    	view3Ctrl.translate();
      	expect(view3Ctrl.romanInteger).toBeUndefined();
    });

    it('should return the value of romanInteger in try block',function() {
    	spyOn(romanNumeralTranslatorService,'translate').and.returnValue();
    	view3Ctrl.translate();
      	expect(romanNumeralTranslatorService.translate).toHaveBeenCalledWith('');
    });

    it('should return the value of decimalInteger', function(){
    	view3Ctrl.decimalInteger;
    	expect().toEqual();
    });

    it('should return the value of romanInteger', function(){
    	view3Ctrl.romanInteger;
    	expect().toEqual();
    });
    
    it('should return the value of translate', function(){
    	view3Ctrl.translate;
    	expect().toEqual();
    });

    it('should return the value of validate', function(){
    	view3Ctrl.validate;
    	expect().toEqual();
    });

  });
/*end*/
});
