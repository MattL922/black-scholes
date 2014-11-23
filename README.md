black-scholes
=============

Option pricing using the Black-Scholes formula.

**blackScholes(s, k, t, v, r, callPut)**
- **s** - Current price of the underlying
- **k** - Strike price
- **t** - Time to expiration in years
- **v** - Volatility as a decimal
- **r** - Annual risk-free interest rate as a decimal
- **callPut** - The type of option to be priced - "call" or "put"

Usage:
```
var bs = require("black-scholes");

bs.blackScholes(30, 34, .25, .2, .08, "call"); // 0.23834902311961947
bs.blackScholes(30, 34, .25, .2, .08, "put"); // 3.5651039155492974
```
