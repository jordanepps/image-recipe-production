require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const fileUpload = require('express-fileupload');
const { NODE_ENV } = require('./config');

// Middleware
const errorHandler = require('./middleware/error-handler');

//Routes
const uploadRouter = require('./routes/upload-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());
app.use(fileUpload());

app.use('/api/upload', uploadRouter);

app.get('/', (req, res) => {
  res.send('Hello, Image Recipe Server!');
});

app.use(errorHandler);

if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
