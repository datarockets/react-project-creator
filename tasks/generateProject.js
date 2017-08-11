const { createProjectByTemplate } = require('./createProjectByTemplate');
const { runCreateReactApp }       = require('./runCreateReactApp');
const { createSetups }            = require('./createSetups');
const { runSetupCommands }        = require('./runSetupCommands');
const { patchPackageJson }        = require('./patchPackageJson');
const { addTrackingByGit }        = require('./addTrackingByGit');

async function run(projectName) {
  await runCreateReactApp(projectName);
  await createProjectByTemplate(projectName);
  await createSetups(projectName);
  await runSetupCommands(projectName);
  await patchPackageJson(projectName);
  await addTrackingByGit(projectName);
}

exports.generateProject = run;
