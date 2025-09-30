const mongoose = require('mongoose');
const SiemSchema = new mongoose.Schema({
  timestamp: Date,
  severity: String,
  message: String,
  source: String,
  raw: Object
});
module.exports = mongoose.model('SiemAlert', SiemSchema);
