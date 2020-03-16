const express = require('express');

const uploadRouter = express.Router();
const jsonBodyParser = express.json();

uploadRouter.route('/').post(jsonBodyParser, (req, res, next) => {
  //Check if a file is uploaded
  if (!req.files) return res.status(400).json({ msg: 'No file uploaded' });

  const file = req.files.file;
  //   console.log(file);

  res.json({ msg: 'done' });
});

module.exports = uploadRouter;
