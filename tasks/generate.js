const { createProjectByTemplate } = require('./createProjectByTemplate');
const { createSetups }            = require('./createSetups');
const { runSetupCommands }        = require('./runSetupCommands');
const { patchPackageJson }        = require('./patchPackageJson');

function run(projectName) {
  createProjectByTemplate(projectName);
  createSetups(projectName);
  runSetupCommands(projectName);
  patchPackageJson(projectName);
}

exports.generate = run;
