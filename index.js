import yaml from 'js-yaml';
import fs   from 'fs';
import _    from 'lodash';

const yamlFile  = fs.readFileSync('structure.yml', 'utf8');
const structure = yaml.safeLoad(yamlFile);

traverse(structure);

function traverse(object, pathsList = []) {
  const keys = _.keys(object);

  keys.forEach((key) => {
    const entity = object[key];

    if (_.isObject(entity)) {
      traverse(entity);
    }

    if (_.isString(entity)) {
      createFile(key, entity);
    }

    createFolder(key);
  });
}

function createFolder(folderName) {
  console.log(folderName);
}

function createFile(fileName, template) {
  console.log(fileName, template);
}

function constructPath(pathsList) {
  return `${__dirname}/${pathsList.join('/')}`;
}
