const express = require('express');
const router = express.Router();
const SiemAlert = require('../models/SiemAlert');
const Vulnerability = require('../models/Vulnerability');

router.get('/kpis', async (req, res) => {
  const alertsCount = await SiemAlert.countDocuments();
  const vulnCount = await Vulnerability.countDocuments();
  res.json({ alertsCount, vulnCount });
});

module.exports = router;
