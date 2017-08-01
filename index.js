const cmd = require('node-cmd');

cmd.get('pwd', (err, data) => console.log('Current directory is: ', data));
