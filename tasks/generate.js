const { createProjectByTemplate } = require('./createProjectByTemplate');
const { createSetups }            = require('./createSetups');
const { runSetupCommands }        = require('./runSetupCommands');
const { patchPackageJson }        = require('./patchPackageJson');

async function run(projectName) {
  await createProjectByTemplate(projectName);
  await createSetups(projectName);
  await runSetupCommands(projectName);
  await patchPackageJson(projectName);
}

exports.generate = run;
