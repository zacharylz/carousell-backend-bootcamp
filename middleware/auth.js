const { auth } = require("express-oauth2-jwt-bearer");

const authMiddleware = auth({
  audience: "https://rocketCarousell/api",
  issuerBaseURL: "https://dev-ayp5n76xm70uk8xb.us.auth0.com",
  tokenSigningAlg: "RS256",
});

module.exports = authMiddleware;
