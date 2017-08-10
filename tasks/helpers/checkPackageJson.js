const fs = require('fs');

function checkPackageJson() {
  if (!fs.existsSync('./package.json')) {
    throw new Error('There is no package json!');
  }
}

exports.checkPackageJson = checkPackageJson;
