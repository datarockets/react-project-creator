const cmd = require('cmd');

function runCommand(commandString) {
  return new Promise((resolve, reject) => {
    cmd.get(commandString, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

exports.runCommand = runCommand;
