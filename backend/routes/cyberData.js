const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const auth = require('../middleware/auth'); // JWT middleware

// GET /api/cyber/stats
router.get('/stats', auth, async (req, res) => {
    try {
        const results = [];
        fs.createReadStream('./data/cyber_data.csv')
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => {
              // Count protocols
              const protocolCount = {};
              results.forEach(row => {
                  const proto = row.protocol_type || 'Unknown';
                  protocolCount[proto] = (protocolCount[proto] || 0) + 1;
              });
              res.json({ protocolCount });
          });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
