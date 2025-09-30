const mongoose = require('mongoose');
const AuditSchema = new mongoose.Schema({
  user: String,
  action: String,
  module: String,
  when: { type: Date, default: Date.now },
  metadata: Object
});
module.exports = mongoose.model('AuditLog', AuditSchema);
