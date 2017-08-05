const fs       = require('fs');
const beautify = require('js-beautify');

const SCRIPTS = {
  "start": "WEBPACK_CONFIG_PATH=./config/webpack.config.js webpack-dev-server --progress",
};

function read(projectName) {
  return fs.readFileSync(`${projectName}/package.json`, 'utf8');
}

function update(packageObject) {
  return Object.assign({}, packageObject, {
    scripts: Object.assign({}, packageObject.scripts, SCRIPTS),
  });
}

function write(projectName, nextPackageJson) {
  fs.writeFileSync(`${projectName}/package.json`, nextPackageJson);
}

function addIndentation(nextPackageJson) {
  return beautify(nextPackageJson, { indent_size: 2, end_with_newline: true });
}

async function run(projectName) {
  return Promise.resolve(projectName)
    .then(read)
    .then(JSON.parse)
    .then(update)
    .then(JSON.stringify)
    .then(addIndentation)
    .then(write.bind(null, projectName));
}

exports.patchPackageJson = run;
