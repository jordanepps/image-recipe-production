const { NODE_ENV } = require('../config');

module.exports = (err, req, res, next) => {
  let response =
    NODE_ENV === 'production'
      ? { error: { message: 'server error' } }
      : { message: err.message, err };
  res.status(500).json(response);
};
