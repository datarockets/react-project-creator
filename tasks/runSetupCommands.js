const commander = require('commander');
const fs        = require('fs');

const { runCommand } = require('./helpers/runCommand');

function setupYarn() {
  return runCommand('yarn init');
}

function setupGit() {
  return runCommand('git init');
}

async function setupDependencies() {
  const dependenciesListPath = `${__dirname}/templates/setups/dependencies.json`;
  const dependenciesListJson = fs.readFileSync(dependenciesListPath);

  const { dependencies, devDependencies } = JSON.parse(dependenciesListJson);

  const dependenciesString     = dependencies.join(' ');
  const dependenciesAddCommand = `yarn add ${dependenciesString}`;

  const devDependenciesString     = devDependencies.join(' ');
  const devDependenciesAddCommand = `yarn add --dev ${devDependenciesString}`;

  await runCommand(dependenciesAddCommand);
  await runCommand(devDependenciesAddCommand);
}

async function run(projectName) {
  await setupYarn();
  await setupGit();

  await setupDependencies();
}

exports.runSetupCommands = run;
