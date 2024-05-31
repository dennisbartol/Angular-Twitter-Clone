const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req, rest) => {
  const { email, password } = req.body; 
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User ({ email, password: hashedPassword });

try { 
  const newUser = await user.save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ user: newUser, token });
}
  catch(err) {
    res.status(400),json({ message: err.message });
  }
});


// Login 
router.post('/login', async (req, rest) => {
  const { email, password } = req.body; 

  

}
