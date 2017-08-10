const fs = require('fs');

const { checkPackageJson } = require('../helpers/checkPackageJson');

const componentConstructor = require('./constructComponent');
const containerConstructor = require('./constructContainer');

const mapTypeToConstructor = {
  component: componentConstructor.construct,
  container: containerConstructor.construct,
};

const mapTypeToListOfFiles = {
  component: componentConstructor.listOfFiles,
  container: containerConstructor.listOfFiles,
};

function getFileContent(elementName, elementType) {
  const contentConstructor = mapTypeToConstructor[elementType];

  if (!contentConstructor) {
    throw new Error('Unkhown element type!');
  }

  return contentConstructor(elementName);
}

function writeBoilerplateToFile(componentName, path, content) {
  fs.writeFileSync(`${path}/${componentName}/index.js`, content, 'utf8');
}

function createFiles(elementName, elementType, path) {
  try {
    fs.mkdirSync(`${path}/${elementName}`);
  } catch (err) {
    throw new Error('File with this type and name has already existed!');
  }

  mapTypeToListOfFiles[elementType].forEach((fileName) => {
    fs.writeFileSync(`${path}/${elementName}/${fileName}`, '', 'utf8');
  });
}

function generate(elementType, elementName) {
  checkPackageJson();

  const currentDir = process.cwd();
  const path       = `${currentDir}/src/${elementType}s`;
  const content    = getFileContent(elementName, elementType);

  createFiles(elementName, elementType, path);
  writeBoilerplateToFile(elementName, path, content);

  console.log(`Done! You\'ll find this ${elementType} in src/${elementType}s/${elementName}`);
}

exports.generateElement = generate;
