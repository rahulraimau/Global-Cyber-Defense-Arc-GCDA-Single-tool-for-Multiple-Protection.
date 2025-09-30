const mongoose = require('mongoose');
const DsarSchema = new mongoose.Schema({
  requester: String,
  requestType: String,
  details: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('DSAR', DsarSchema);
