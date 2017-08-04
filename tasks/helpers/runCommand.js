const cmd = require('node-cmd');

function runCommand(commandString) {
  return new Promise((resolve, reject) => {
    cmd.get(commandString, (err, data) => {
      if (err) {
        console.log('Command failed with error: ', err);
        reject(err);
      }

      resolve(data);
    });
  });
}

exports.runCommand = runCommand;
