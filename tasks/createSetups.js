const fs        = require('fs');
const commander = require('commander');

const SETUPS_LIST = [
  { fileName: '.babelrc', templateName: 'babelrc-template' },
  { fileName: '.gitignore', templateName: 'gitignore-template' },
  { fileName: 'README.md', templateName: 'readme-template.md' },
];

function run(projectName) {
  const currentDir = process.cwd();

  SETUPS_LIST.forEach(({ fileName, templateName }) => {
    const originFilePath = `${__dirname}/templates/setups/${templateName}`
    const contents       = fs.readFileSync(originFilePath, 'utf8');
    const writePath      = `${currentDir}/${projectName}/${fileName}`;

    fs.writeFileSync(writePath, contents, 'utf8');
  });
}

exports.createSetups = run;
