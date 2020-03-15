const express = require('express');

const uploadRouter = express.Router();
const jsonBodyParser = express.json();

uploadRouter.route('/').post(jsonBodyParser, (req, res, next) => {
  if (!req.files) return res.status(400).json({ msg: 'No file uploaded' });

  res.json({ msg: 'done' });
});

module.exports = uploadRouter;
