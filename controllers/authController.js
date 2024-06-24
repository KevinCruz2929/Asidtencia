const { User } = require('../models');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('Username already taken');
    }

    await User.create({ username, password });
    res.status(200).send('User registered successfully');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Failed to register user');
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).send({ message: 'Login successful', isAdmin: user.username === '1' });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).send('Failed to login');
  }
};

module.exports = {
  register,
  login
};