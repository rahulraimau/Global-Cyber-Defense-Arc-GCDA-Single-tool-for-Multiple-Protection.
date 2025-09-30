const express = require('express');
const router = express.Router();
const DSAR = require('../models/DSAR');

router.post('/dsar', async (req, res) => {
  const created = await DSAR.create(req.body);
  res.json(created);
});

router.post('/consent', async (req, res) => {
  res.json({ ok: true, data: req.body });
});

module.exports = router;
