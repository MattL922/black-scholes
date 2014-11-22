var assert = require("assert"),
    bs     = require("../black-scholes");

describe("Black-Scholes", function()
{
  describe("t>0, v>0", function()
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
  describe("t>0, v=0, out-of-the-money", function()
  {
    it("should return a call price of 0", function()
    {
      assert.equal(0, bs.blackScholes(30, 34, .25, 0, .08, "call"));
    });
    it("should return a put price of 0", function()
    {
      assert.equal(0, bs.blackScholes(35, 34, .25, 0, .08, "put"));
    });
  });
  describe("t=0, v>0, out-of-the-money", function()
  {
    it("should return a call price of 0", function()
    {
      assert.equal(0, bs.blackScholes(30, 34, 0, 0.1, .08, "call"));
    });
    it("should return a put price of 0", function()
    {
      assert.equal(0, bs.blackScholes(35, 34, 0, 0.1, .08, "put"));
    });
  });
  describe("t=0, v=0, out-of-the-money", function()
  {
    it("should return a call price of 0", function()
    {
      assert.equal(0, bs.blackScholes(30, 34, 0, 0, .08, "call"));
    });
    it("should return a put price of 0", function()
    {
      assert.equal(0, bs.blackScholes(35, 34, 0, 0, .08, "put"));
    });
  });
  // It may seem odd that the call is worth significantly more than the put when
  // they are both $2 in the money.  This is because the call theoretically has
  // unlimited profit potential.  The put can only make money until the underlying
  // goes to zero.  Therefore the call has more value.
  describe("t>0, v=0, in-the-money", function()
  {
    it("should return a call price of 2.673245107570324", function()
    {
      assert.equal(2.673245107570324, bs.blackScholes(36, 34, .25, 0, .08, "call"));
    });
    it("should return a put price of 1.3267548924296761", function()
    {
      assert.equal(1.3267548924296761, bs.blackScholes(32, 34, .25, 0, .08, "put"));
    });
  });
  describe("t=0, v>0, in-the-money", function()
  {
    it("should return a call price of 2", function()
    {
      assert.equal(2, bs.blackScholes(36, 34, 0, 0.1, .08, "call"));
    });
    it("should return a put price of 2", function()
    {
      assert.equal(2, bs.blackScholes(32, 34, 0, 0.1, .08, "put"));
    });
  });
  describe("t=0, v=0, in-the-money", function()
  {
    it("should return a call price of 2", function()
    {
      assert.equal(2, bs.blackScholes(36, 34, 0, 0, .08, "call"));
    });
    it("should return a put price of 2", function()
    {
      assert.equal(2, bs.blackScholes(32, 34, 0, 0, .08, "put"));
    });
  });
});
