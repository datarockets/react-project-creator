const listOfFiles = [
  'index.js',
];

function construct(componentName) {
  return `import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from 'src/redux/actions';

import View from 'src/components/${componentName}';

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(View);`;
}

exports.listOfFiles = listOfFiles;
exports.construct   = construct;
