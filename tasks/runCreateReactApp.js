const { runCommand } = require('./helpers/runCommand');

function removeUselessFiles() {
  return runCommand('rm -rf src public');
}

async function runCreateReactApp(projectName) {
  await runCommand(`create-react-app ${projectName}`);
  await process.chdir(`./${projectName}`);
  await removeUselessFiles(projectName);
  await process.chdir(`..`);

  console.log('Initialize yarn');
}

exports.runCreateReactApp = runCreateReactApp;
