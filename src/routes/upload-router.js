const express = require('express');
const fs = require('fs');
const Clarifai = require('clarifai');
const { CLARIFAI_KEY, FOOD_MODEL } = require('../config');

const app = new Clarifai.App({
  apiKey: CLARIFAI_KEY
});

const uploadRouter = express.Router();
const jsonBodyParser = express.json();

function base64_encode(data) {
  // convert binary data to base64 encoded string
  return Buffer.from(data).toString('base64');
}

function parseData(res) {
  // get array output of of response
  const data = res.outputs[0].data.concepts;
  return data.map(ingredient => ({
    name: ingredient.name,
    prob: Number(ingredient.value.toFixed(3))
  }));
}

uploadRouter.route('/').post(jsonBodyParser, (req, res, next) => {
  const { url } = req.body;
  //Check if a file is uploaded
  if (!req.files && !url)
    return res.status(400).json({ err: 'No file uploaded or image url' });

  let data;

  if (req.files) {
    const file = req.files.file;
    data = base64_encode(file.data);
  }

  if (url) data = url;

  app.models.predict(FOOD_MODEL, data).then(
    function(response) {
      // do something with response
      res.json({ response: parseData(response) });
    },
    function(err) {
      // there was an error
      res.status(400).json({ err });
    }
  );
});

module.exports = uploadRouter;
