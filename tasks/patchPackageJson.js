const fs = require('fs');

const SCRIPTS = {
  "start": "WEBPACK_CONFIG_PATH=./config/webpack.config.js webpack-dev-server --progress",
};

function read(projectName) {
  return fs.readFileSync(`${projectName}/package.json`, 'utf8');
}

function update(packageObject) {
  return Object.assign({}, packageObject, { scripts: Object.assign({}, packageObject, SCRIPTS) });
}

function write(projectName, nextPackageJson) {
  fs.writeFileSync(`${projectName}/package.json`, nextPackageJson, 'utf8');
}

function run(projectName) {
  const packageJson       = read(projectName);
  const packageObject     = JSON.parse(packageJson);

  const nextPackageObject = update(packageObject);
  const nextPackageJson   = JSON.stringify(packageJson);

  write(projectName, nextPackageJson);
}

exports.patchPackageJson = run;
