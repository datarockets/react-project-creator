const fs       = require('fs');
const beautify = require('js-beautify');

const SCRIPTS = {
  "start": "WEBPACK_CONFIG_PATH=./config/webpack.config.js webpack-dev-server --progress",
  // "start": "REACT_APP_REVISION=$(git rev-parse HEAD) WEBPACK_CONFIG_PATH=./config/webpack.config.dev.js react-scripts start",
  // "build": "REACT_APP_REVISION=$(git rev-parse HEAD) WEBPACK_CONFIG_PATH=./config/webpack.config.prod.js react-scripts build",
  // "test": "NODE_PATH=./ react-scripts test --env=jsdom",
  // "lint": "stylelint 'src/**/*.css' && eslint src config",
  // "build-package": "PUBLIC_URL=./ yarn run build",
};

function read(projectName) {
  return fs.readFileSync(`${projectName}/package.json`, 'utf8');
}

function update(projectName, packageObject) {
  return Object.assign({}, packageObject, {
    name: projectName,
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
    .then(update.bind(null, projectName))
    .then(JSON.stringify)
    .then(addIndentation)
    .then(write.bind(null, projectName));
}

exports.patchPackageJson = run;
