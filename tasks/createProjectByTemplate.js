const fs = require('fs');

const { createDirectoryContents } = require('./helpers/createDirectoryContents');

function getSetupValues() {
  const currentDir   = process.cwd();
  const projectName  = process.argv[2];

  const frontProjectTemplatePath = `${__dirname}/templates/front-js-project`;
  const reactProjectTemplatePath = `${__dirname}/templates/react-redux-project`;

  return { currentDir, projectName, frontProjectTemplatePath, reactProjectTemplatePath };
}

function createProjectDirectory(currentDir, projectName) {
  fs.mkdirSync(`${currentDir}/${projectName}`);
}

function run() {
  const {
    currentDir,
    projectName,
    frontProjectTemplatePath,
    reactProjectTemplatePath,
  } = getSetupValues();

  if (!projectName) {
    throw new Error('You should provide a name for a project');
  }

  createProjectDirectory(currentDir, projectName);
  createDirectoryContents(frontProjectTemplatePath, projectName, currentDir);
  createDirectoryContents(reactProjectTemplatePath, `${projectName}/src`, currentDir);
}

exports.createProjectByTemplate = run;
