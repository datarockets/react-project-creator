const fs = require('fs');
const _  = require('lodash');

function getSetupValues() {
  const currentDir   = process.cwd();
  const projectName  = process.argv[2];
  const templatePath = `${__dirname}/templates/react-redux-project`;

  return { currentDir, projectName, templatePath };
}

function createProjectDirectory(currentDir, projectName) {
  fs.mkdirSync(`${currentDir}/${projectName}`);
}

function createDirectoryContents(templatePath, newProjectPath, currentDir) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(originFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(originFilePath, 'utf8');
      const writePath = `${currentDir}/${newProjectPath}/${file}`;

      fs.writeFileSync(writePath, contents, 'utf8');
    }

    if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDir}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, currentDir);
    }
  });
}

function run() {
  const { currentDir, projectName, templatePath } = getSetupValues();

  if (!projectName) {
    throw new Error('You should provide a name for a project');
  }

  createProjectDirectory(currentDir, projectName);
  createDirectoryContents(templatePath, projectName, currentDir);
}

exports.createProjectByTemplate = run;
