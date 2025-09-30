const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash: hash, role });
    res.json({ ok: true, id: user._id });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(401).json({ error: 'Invalid' });
    const valid = await bcrypt.compare(password, user.passwordHash);
    if(!valid) return res.status(401).json({ error: 'Invalid' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'changeme', { expiresIn: '8h' });
    res.json({ token });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/verifyToken', (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    res.json({ ok: true, decoded });
  } catch (e) { res.status(401).json({ error: 'Invalid token' }); }
});

router.get('/profile', async (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const user = await User.findById(decoded.id).select('-passwordHash');
    res.json({ user });
  } catch (e) { res.status(401).json({ error: 'Invalid token' }); }
});

module.exports = router;
