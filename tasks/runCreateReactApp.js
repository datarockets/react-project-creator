const { runCommand } = require('./helpers/runCommand');

function removeUselessFiles() {

}

function runCreateReactApp(projectName) {
  runCommand(`create-react-app ${projectName}`);
}

exports.runCreateReactApp = runCreateReactApp;
