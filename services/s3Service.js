const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'us-east-1' });

exports.uploadFile = async (fileBuffer, fileName) => {
  const params = { Bucket: 'nova-drive-bucket', Key: fileName, Body: fileBuffer };
  return s3.upload(params).promise();
};