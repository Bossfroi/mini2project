const router = require('express').Router();
const googleauth = require('../model/googleauthmodel');

router.post('/insert', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await googleauth.findOne({ email });

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    if (user) {
      // Handle successful login (e.g., redirect to the dashboard)
      const data = await response.json();
      console.log('Server response:', data);

      // Set isAuthenticated if needed
      setServerResponse(data);

      // Navigate to the dashboard or handle it as required
      navigate('/Dashboard');
    } else {
      // Handle login errors (e.g., display error messages)
      console.error('Login failed');
    }
  } catch (error) {
    console.error('An error occurred', error);
  }
});

module.exports = router;