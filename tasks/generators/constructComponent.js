const listOfFiles = [
  'index.js',
  'styles.css',
];

function construct(componentName) {
  return `import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

class ${componentName} extends Component {
  static propTypes = {

  }

  render() {
    return null;
  }
}

export default ${componentName};`;
}

exports.listOfFiles = listOfFiles;
exports.construct   = construct;
