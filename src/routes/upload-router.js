const express = require('express');
const fs = require('fs');

const uploadRouter = express.Router();
const jsonBodyParser = express.json();

function base64_encode(data) {
  // convert binary data to base64 encoded string
  return new Buffer(data).toString('base64');
}

uploadRouter.route('/').post(jsonBodyParser, (req, res, next) => {
  //Check if a file is uploaded
  if (!req.files)
    return res.status(400).json({ err: 'No file uploaded or image link' });

  const file = req.files.file;
  //   console.log('TEST', fs.readFileSync('package.json'));
  //   console.log('FILE', file.data);

  const bytes = base64_encode(file.data);

  res.json({ msg: 'done', bytes });
});

module.exports = uploadRouter;
