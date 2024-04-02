// next.config.js
const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  module.exports = require('./next.config.prod');
} else {
  module.exports = require('./next.config.dev');
}
