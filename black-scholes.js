/**
 * Black-Scholes option pricing formula and supporting statistical functions.
 * @module black-scholes
 */

/**
 * Standard normal cumulative distribution function.  The probability is estimated
 * by expanding the CDF into a series using the first 100 terms.
 * See {@link http://en.wikipedia.org/wiki/Normal_distribution#Cumulative_distribution_function|Wikipedia page}.
 * @private
 *
 * @param {Number} x The upper bound to integrate over.  This is P{Z <= x} where Z is a standard normal random variable.
 * @returns {Number} The probability that a standard normal random variable will be less than or equal to x
 */
function _stdNormCDF(x)
{
  var temp = 0;
  for(var i = 0; i < 100; i++)
  {
    temp += (Math.pow(x, 2*i+1)/_doubleFactorial(2*i+1));
  }
  temp *= Math.pow(Math.E, -0.5*Math.pow(x, 2));
  temp /= Math.sqrt(2*Math.PI);
  return temp + 0.5;
}

/**
 * Double factorial.  See {@link http://en.wikipedia.org/wiki/Double_factorial|Wikipedia page}.
 * @private
 *
 * @param {Number} n The number to calculate the double factorial of
 * @returns {Number} The double factorial of n
 */
function _doubleFactorial(n)
{
  var val = 1;
  for(var i = n; i > 1; i-=2)
  {
    val *= i;
  }
  return val;
}

/**
 * Black-Scholes option pricing formula.
 * See {@link http://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model#Black-Scholes_formula|Wikipedia page}
 * for pricing puts in addition to calls.
 *
 * @param   {Number} s       Current price of the underlying
 * @param   {Number} k       Strike price
 * @param   {Number} t       Time to experiation in years
 * @param   {Number} v       Volatility as a decimal
 * @param   {Number} r       Anual risk-free interest rate as a decimal
 * @param   {String} callPut The type of option to be priced - "call" or "put"
 * @returns {Number}         Price of the option
 */
function blackScholes(s, k, t, v, r, callPut)
{
  var price = null;
  var w = (r * t + Math.pow(v, 2) * t / 2 - Math.log(k / s)) / (v * Math.sqrt(t));
  if(callPut === "call")
  {
    price = s * _stdNormCDF(w) - k * Math.pow(Math.E, -1 * r * t) * _stdNormCDF(w - v * Math.sqrt(t));
  }
  else // put
  {
    price = k * Math.pow(Math.E, -1 * r * t) * _stdNormCDF(v * Math.sqrt(t) - w) - s * _stdNormCDF(-w);
  }
  return price;
}

module.exports = {
  blackScholes: blackScholes,
};
