const fs = require('fs');
const _  = require('lodash');

const { checkPackageJson } = require('../helpers/checkPackageJson');

const componentConstructor = require('./constructComponent');
const containerConstructor = require('./constructContainer');

const mapFlagToFolderName = {
  ui: 'ui',
  page: 'pages',
  layout: 'layouts',
};

const mapTypeToConstructor = {
  component: componentConstructor.construct,
  container: containerConstructor.construct,
};

const mapTypeToListOfFiles = {
  component: componentConstructor.listOfFiles,
  container: containerConstructor.listOfFiles,
};

function getOption(elementSubType) {
  const listOfOptions = _.toPairs(elementSubType).filter(([first, last]) => last);

  if (_.isEmpty(listOfOptions)) {
    return null;
  }

  if (_.size(listOfOptions) > 1) {
    throw new Error('You can pass only one option!');
  }

  const flag = _
    .chain(listOfOptions)
    .head()
    .head()
    .value();

  return mapFlagToFolderName[flag];
}

function constructPath(elementType, elementSubType) {
  const currentDir    = process.cwd();
  const path          = `${currentDir}/src/${elementType}s`;
  const acceptOptions = (elementType === 'component');
  const option        = getOption(elementSubType);

  if (option && acceptOptions) {
    return `${path}/${option}`;
  } else {
    return path;
  }
}

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
    throw new Error('A file with this type and name has already existed!');
  }

  mapTypeToListOfFiles[elementType].forEach((fileName) => {
    fs.writeFileSync(`${path}/${elementName}/${fileName}`, '', 'utf8');
  });
}

function generate(elementType, elementName, elementSubType) {
  checkPackageJson();

  const path    = constructPath(elementType, elementSubType);
  const content = getFileContent(elementName, elementType);

  createFiles(elementName, elementType, path);
  writeBoilerplateToFile(elementName, path, content);

  console.log(`Done! You\'ll find this ${elementType} in src/${elementType}s/${elementName}`);
}

exports.generateElement = generate;
