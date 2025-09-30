const express = require('express');
const router = express.Router();
const SiemAlert = require('../models/SiemAlert');

router.get('/alerts', async (req, res) => {
  const recent = await SiemAlert.find().sort({ timestamp: -1 }).limit(200);
  res.json(recent);
});

router.post('/ingest', async (req, res) => {
  const payload = req.body;
  await SiemAlert.create({ timestamp: new Date(), severity: payload.severity || 'info', message: payload.message || '', source: payload.source || '', raw: payload });
  res.json({ ok: true });
});

module.exports = router;
