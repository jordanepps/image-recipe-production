module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'deployment',
  CLARIFAI_KEY: process.env.CLARIFAI_KEY,
  FOOD_MODEL: process.env.FOOD_MODEL || 'bd367be194cf45149e75f01d59f77ba7'
};
