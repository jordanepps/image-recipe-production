const express = require('express');

const uploadRouter = express.Router();
const jsonBodyParser = express.json();

uploadRouter.route('/').post(jsonBodyParser, (req, res, next) => {
  if ((req, files === null))
    return res.status(400).json({ msg: 'No file uploaded' });
});

module.exports = uploadRouter;
