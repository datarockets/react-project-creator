import yaml from 'js-yaml';
import fs   from 'fs';
import _    from 'lodash';

const yamlFile  = fs.readFileSync('structure.yml', 'utf8');
const structure = yaml.safeLoad(yamlFile);

function traverse(object, pathsList = []) {
  const keys = _.keys(object);

  keys.forEach((key) => {
    const entity       = object[key];
    const previousPath = constructPath(pathsList);
    const currentPath  = `${previousPath}/${key}`;

    if (_.isObject(entity)) {
      traverse(entity, pathsList.concat([key]));
    }

    if (_.isString(entity)) {
      createFile(currentPath, entity);
    }

    createFolder(currentPath);
  });
}

function createFolder(folderName) {
  console.log(folderName);
}

function createFile(fileName, template) {
  console.log(fileName, template);
}

function constructPath(pathsList) {
  return `${pathsList.join('/')}`;
}
