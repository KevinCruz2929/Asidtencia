const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const scanRoutes = require('./routes/scanRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/user', userRoutes);

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
