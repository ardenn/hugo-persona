const autoprefixer = require('autoprefixer');

module.exports = {
  // eslint-disable-next-line no-process-env
  plugins: process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : []
};