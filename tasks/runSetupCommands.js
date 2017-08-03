const commander = require('commander');
const fs        = require('fs');

function run() {
  const dependenciesListPath = `${__dirname}/templates/setups/dependencies.json`;
  const dependenciesListJson = fs.readFileSync(dependenciesListPath);

  const { dependencies, devDependencies } = JSON.parse(dependenciesListJson);
}

exports.runSetupCommands = run;
