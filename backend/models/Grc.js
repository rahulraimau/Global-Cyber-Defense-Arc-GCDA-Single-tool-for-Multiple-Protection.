const mongoose = require('mongoose');
const GrcSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  status: String,
  owner: String,
  history: [{ by: String, when: Date, note: String }],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Grc', GrcSchema);
