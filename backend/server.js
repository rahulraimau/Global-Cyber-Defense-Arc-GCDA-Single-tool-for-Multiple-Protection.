require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || '';
console.log('MONGO_URI (loaded):', Boolean(MONGO));
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/grc', require('./routes/grc'));
app.use('/api/siem', require('./routes/siem'));
app.use('/api/edr', require('./routes/edr'));
app.use('/api/vuln', require('./routes/vuln'));
app.use('/api/privacy', require('./routes/privacy'));
app.use('/api/audit', require('./routes/audit'));
app.use('/api/dashboard', require('./routes/dashboard'));


// New Cyber Data route
app.use('/api/cyber', require('./routes/cyberData'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
