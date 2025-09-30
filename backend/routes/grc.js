const express = require('express');
const router = express.Router();
const Grc = require('../models/Grc');

router.get('/risks', async (req, res) => {
  const items = await Grc.find().limit(200);
  res.json(items);
});

router.post('/policies', async (req, res) => {
  const p = await Grc.create(req.body);
  res.json(p);
});

router.get('/audits', async (req, res) => {
  const audits = await Grc.find({ type: 'audit' }).limit(200);
  res.json(audits);
});

module.exports = router;
