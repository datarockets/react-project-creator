const fs        = require('fs');
const commander = require('commander');

const CONFIGS_LIST = [
  { fileName: 'webpack.config.dev.js', configName: 'webpack.config.dev.js' },
  { fileName: 'webpack.config.prod.js', configName: 'webpack.config.prod.js' },
  { fileName: 'patcher.js', configName: 'patcher.js' },
];

const SETUPS_LIST = [
  { fileName: '.babelrc', templateName: 'babelrc-template' },
  { fileName: '.gitignore', templateName: 'gitignore-template' },
  { fileName: 'README.md', templateName: 'readme-template.md' },
  { fileName: '.editconfig', templateName: 'editconfig-template' },
  { fileName: '.eslintrc.js', templateName: 'eslintrc-template' },
  { fileName: '.stylelintrc.yml', templateName: 'stylelintrc-template' },
  { fileName: '.eslintignore', templateName: 'eslintignore-template' },
];

function addSetups(currentDir, projectName) {
  SETUPS_LIST.forEach(({ fileName, templateName }) => {
    const originFilePath = `${__dirname}/templates/setups/${templateName}`;
    const contents       = fs.readFileSync(originFilePath, 'utf8');
    const writePath      = `${currentDir}/${projectName}/${fileName}`;

    fs.writeFileSync(writePath, contents, 'utf8');
  });
}

function addConfigs(currentDir, projectName) {
  CONFIGS_LIST.forEach(({ fileName, configName }) => {
    const originFilePath = `${__dirname}/config/${configName}`
    const contents       = fs.readFileSync(originFilePath, 'utf8');
    const writePath      = `${currentDir}/${projectName}/config/${fileName}`;

    fs.writeFileSync(writePath, contents, 'utf8');
  });
}

function run(projectName) {
  const currentDir = process.cwd();

  addSetups(currentDir, projectName);
  addConfigs(currentDir, projectName);
}

exports.createSetups = run;
