const { generateShareToken } = require('../utils/tokenGenerator');

exports.shareFile = (req, res) => {
  const token = generateShareToken();
  res.json({ success: true, shareLink: `https://novadrive.app/s/${token}` });
};