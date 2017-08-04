const commander = require('commander');
const git       = require('simple-git');
const fs        = require('fs');

const { runCommand } = require('./helpers/runCommand');

function setupYarn() {
  console.log('Initialize yarn');
  return runCommand('yarn init --yes');
}

function setupGit() {
  console.log('Initialize git');
  return runCommand('git init');
}

async function setupDependencies() {
  const dependenciesListPath = `${__dirname}/config/dependencies.json`;
  const dependenciesListJson = fs.readFileSync(dependenciesListPath);

  const { dependencies, devDependencies } = JSON.parse(dependenciesListJson);

  const dependenciesString     = dependencies.join(' ');
  const dependenciesAddCommand = `yarn add ${dependenciesString}`;

  const devDependenciesString     = devDependencies.join(' ');
  const devDependenciesAddCommand = `yarn add --dev ${devDependenciesString}`;

  console.log('Add dependencies');
  await runCommand(dependenciesAddCommand);

  console.log('Add development dependencies');
  await runCommand(devDependenciesAddCommand);
}

async function run(projectName) {
  await process.chdir(`./${projectName}`);

  await setupYarn();
  await setupGit();
  await setupDependencies();

  await process.chdir(`..`);
  console.log('Ready!');
}

exports.runSetupCommands = run;
