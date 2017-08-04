const fs        = require('fs');
const commander = require('commander');

const SETUPS_LIST = [
  { fileName: '.babelrc', templateName: 'babelrc-template' },
  { fileName: '.gitignore', templateName: 'gitignore-template' },
  { fileName: 'README.md', templateName: 'readme-template.md' },
  { fileName: 'webpack.config.js', templateName: 'webpack.config.js', path: 'config' },
];

function getWritePath(currentDir, projectName, fileName, path) {
  if (path) {
    return `${currentDir}/${projectName}/${path}/${fileName}`;
  } else {
    return `${currentDir}/${projectName}/${fileName}`;
  }
}

function run(projectName) {
  const currentDir = process.cwd();

  SETUPS_LIST.forEach(({ fileName, templateName, path }) => {
    const originFilePath = `${__dirname}/templates/setups/${templateName}`
    const contents       = fs.readFileSync(originFilePath, 'utf8');
    const writePath      = getWritePath(currentDir, projectName, fileName, path);

    fs.writeFileSync(writePath, contents, 'utf8');
  });
}

exports.createSetups = run;
