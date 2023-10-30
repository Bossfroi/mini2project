// routes/login.js
const router = require('express').Router();
const User = require('../model/signup'); // Import your user model

// Existing login route
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check for user existence and validate password
    const user = await User.findOne({ email  });
    const userData = {
      name: user.name,
      family_name: user.family_name,
      picture: user.picture,
    };
    await user.save();
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    } 
 
    return res.status(200).json(userData);
  } catch (error) {
    console.error('An error occurred', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Read Single User by Email route
router.get('/', async (req, res) => {
  const { email } = req.query; 

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.find({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('An error occurred', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
