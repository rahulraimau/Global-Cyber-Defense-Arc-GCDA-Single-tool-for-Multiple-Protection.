const mongoose = require('mongoose');
const DeviceSchema = new mongoose.Schema({
  hostname: String,
  ip: String,
  os: String,
  agentStatus: String,
  lastSeen: Date,
  metadata: Object
});
module.exports = mongoose.model('Device', DeviceSchema);
