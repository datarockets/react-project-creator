const { runCommand } = require('./helpers/runCommand');

async function run(projectName) {
  await process.chdir(`./${projectName}`);
  await runCommand('git add .');
  await runCommand('git commit -m "Initial commit"');
  await process.chdir(`..`);
}

exports.addTrackingByGit = run;
