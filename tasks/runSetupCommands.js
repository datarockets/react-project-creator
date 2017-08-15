const commander = require('commander');
const git       = require('simple-git');
const fs        = require('fs');

const { runCommand }           = require('./helpers/runCommand');
const { dependenciesToString } = require('./helpers/dependenciesToString');

function setupGit() {
  console.log('Initialize git');
  return runCommand('git init');
}

async function setupDependencies() {
  const dependenciesListPath = `${__dirname}/config/dependencies.json`;
  const dependenciesListJson = fs.readFileSync(dependenciesListPath);

  const { dependencies, devDependencies } = JSON.parse(dependenciesListJson);

  const dependenciesString     = dependenciesToString(dependencies);
  console.log(dependenciesString);
  const dependenciesAddCommand = `yarn add ${dependenciesString}`;

  const devDependenciesString     = dependenciesToString(devDependencies);
  const devDependenciesAddCommand = `yarn add --dev ${devDependenciesString}`;

  console.log('Add dependencies');
  await runCommand(dependenciesAddCommand);

  console.log('Add development dependencies');
  await runCommand(devDependenciesAddCommand);
}

function setupFlow() {
  console.log('Initialize flow');
  return runCommand('yarn run flow init');
}

async function run(projectName) {
  await process.chdir(`./${projectName}`);

  await setupGit();
  await setupDependencies();
  await setupFlow();

  await process.chdir(`..`);

  console.log('Ready!');
}

exports.runSetupCommands = run;
