const crypto = require('crypto');

exports.generateShareToken = () => {
  return crypto.randomBytes(16).toString('hex');
};