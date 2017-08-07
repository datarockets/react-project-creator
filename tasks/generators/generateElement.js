const fs = require('fs');

const componentConstructor = require('./constructComponent');
const containerConstructor = require('./constructContainer');

const MAP_TYPE_TO_CONSTRUCTOR = {
  component: componentConstructor.construct,
  container: containerConstructor.construct,
};

const MAP_TYPE_TO_LIST_OF_FILES = {
  component: componentConstructor.listOfFiles,
  container: containerConstructor.listOfFiles,
};

function getFileContent(elementType, elementName) {
  const contentConstructor = MAP_TYPE_TO_CONSTRUCTOR[elementType];

  return contentConstructor(elementName);
}

function writeBoilerplateToFile(componentName, path, content) {
  fs.writeFileSync(`${path}/${componentName}/index.js`, content, 'utf8');
}

function createFiles(elementName, elementType, path) {
  fs.mkdirSync(`${path}/${elementName}`);

  MAP_TYPE_TO_LIST_OF_FILES[elementType].forEach((fileName) => {
    fs.writeFileSync(`${path}/${elementName}/${fileName}`, '', 'utf8');
  });
}

function generate(elementName, elementType, path) {
  const content = getFileContent(elementName, elementType);

  createFiles(elementName, elementType, path);
  writeBoilerplateToFile(elementName, path, content);
}

exports.generateElement = generate;
