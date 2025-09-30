const express = require('express');
const router = express.Router();
const AuditLog = require('../models/AuditLog');

router.get('/', async (req, res) => {
  const logs = await AuditLog.find().sort({ when: -1 }).limit(500);
  res.json(logs);
});

module.exports = router;
