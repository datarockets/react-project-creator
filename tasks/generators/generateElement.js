const fs = require('fs');

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

function getFileContent(elementType, elementName) {
  const contentConstructor = mapTypeToConstructor[elementType];

  return contentConstructor(elementName);
}

function writeBoilerplateToFile(componentName, path, content) {
  fs.writeFileSync(`${path}/${componentName}/index.js`, content, 'utf8');
}

function createFiles(elementName, elementType, path) {
  fs.mkdirSync(`${path}/${elementName}`);

  mapTypeToListOfFiles[elementType].forEach((fileName) => {
    fs.writeFileSync(`${path}/${elementName}/${fileName}`, '', 'utf8');
  });
}

function generate(elementType, elementName, path) {
  const content = getFileContent(elementName, elementType);

  createFiles(elementName, elementType, path);
  writeBoilerplateToFile(elementName, path, content);
}

exports.generateElement = generate;
