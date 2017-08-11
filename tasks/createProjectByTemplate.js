const fs = require('fs');

const { createDirectoryContents } = require('./helpers/createDirectoryContents');

function getSetupValues() {
  const currentDir = process.cwd();

  const frontProjectTemplatePath = `${__dirname}/templates/front-js-project`;
  const reactProjectTemplatePath = `${__dirname}/templates/react-redux-project`;

  return { currentDir, frontProjectTemplatePath, reactProjectTemplatePath };
}

function run(projectName) {
  const {
    currentDir,
    frontProjectTemplatePath,
    reactProjectTemplatePath,
  } = getSetupValues();

  if (!projectName) {
    throw new Error('You should provide a name for a project');
  }

  createDirectoryContents(frontProjectTemplatePath, projectName, currentDir);
  createDirectoryContents(reactProjectTemplatePath, `${projectName}/src`, currentDir);
}

exports.createProjectByTemplate = run;
