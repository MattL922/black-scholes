var assert = require("assert"),
    bs     = require("../black-scholes");

describe("Black-Scholes", function()
{
  it("should return a price of 0.23834902311961947", function()
  {
    assert.equal(0.23834902311961947, bs.blackScholes(30, 34, .25, .2, .08, "call"));
  });
});
