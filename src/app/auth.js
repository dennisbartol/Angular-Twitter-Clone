const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req, rest) => {
  const { email, password } = req.body; 
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User ({ email, password: hashedPassword });
