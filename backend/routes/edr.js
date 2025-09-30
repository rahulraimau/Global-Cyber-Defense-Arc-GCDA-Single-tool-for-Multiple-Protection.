const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

router.get('/devices', async (req, res) => {
  const list = await Device.find().limit(500);
  res.json(list);
});

router.post('/webhook', async (req, res) => {
  const body = req.body;
  if(body.device) {
    await Device.updateOne({ hostname: body.device.hostname }, { $set: body.device }, { upsert: true });
  }
  res.json({ ok: true });
});

module.exports = router;
