const axios = require('axios');

const instance = process.env.SERVICE_NOW_INSTANCE;
const user = process.env.SERVICE_NOW_USER;
const pass = process.env.SERVICE_NOW_PASS;

const auth = { username: user, password: pass };

async function queryTable(table, params = {}) {
  const url = `${instance}/api/now/table/${table}`;
  const r = await axios.get(url, { auth, params });
  return r.data;
}

async function createRecord(table, payload) {
  const url = `${instance}/api/now/table/${table}`;
  const r = await axios.post(url, payload, { auth });
  return r.data;
}

module.exports = { queryTable, createRecord };
