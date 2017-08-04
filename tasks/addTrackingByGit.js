const { runCommand } = require('./helpers/runCommand');

async function run() {
  await runCommand('git add .');
  await runCommand('git commit -m "Initial commit"');
}

exports.addTrackingByGit = run;
