var assert = require("assert"),
    bs     = require("../black-scholes");

describe("Black-Scholes", function()
{
  it("should return a call price of 0.23834902311961947", function()
  {
    assert.equal(0.23834902311961947, bs.blackScholes(30, 34, .25, .2, .08, "call"));
  });
  it("should return a put price of 3.5651039155492974", function()
  {
    assert.equal(3.5651039155492974, bs.blackScholes(30, 34, .25, .2, .08, "put"));
  });
});
