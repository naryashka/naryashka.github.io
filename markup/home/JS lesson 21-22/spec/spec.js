var app = require('../Task for tests/js/script.js');

describe("function isEven", function() {
  it("it should be even", function() {
  	var result;
  	result = app.isEven(2);
    expect(result).toBe(true);
  });
});

describe("function pow", function() {
  it("it should calculate the pow", function() {
  	var result;
  	result = app.pow(2,2);
    expect(result).toBe(4);
  });
});