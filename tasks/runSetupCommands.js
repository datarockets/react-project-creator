const commander = require('commander');
const fs        = require('fs');

function setupDependencies() {
  const dependenciesListPath = `${__dirname}/templates/setups/dependencies.json`;
  const dependenciesListJson = fs.readFileSync(dependenciesListPath);

  const { dependencies, devDependencies } = JSON.parse(dependenciesListJson);
}

function run(projectName) {
  setupDependencies();
}

exports.runSetupCommands = run;
