const jwt = require('jsonwebtoken');
const axios = require('axios');

const OKTA_ISSUER = process.env.OKTA_ISSUER;
const OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID;

async function verifyOktaToken(token) {
  const jwksUrl = `${OKTA_ISSUER}/v1/keys`;
  const { data } = await axios.get(jwksUrl);
  const decoded = jwt.decode(token, { complete: true });
  return decoded;
}

module.exports = { verifyOktaToken };
