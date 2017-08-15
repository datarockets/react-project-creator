const _ = require('lodash');

function dependenciesToString(dependencies) {
  return _
    .toPairs(dependencies)
    .reduce(
      (accString, pair) => `${accString} ${pair.join('@')}`,
      '',
    );
}

exports.dependenciesToString = dependenciesToString;
