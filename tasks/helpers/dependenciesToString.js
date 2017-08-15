const _ = require('lodash');

function dependenciesToString(dependencies) {
  return _
    .toPairs(dependencies)
    .reduce(
      (accString, pair) => {
        const moduleString = (pair[1] ? pair.join('@') : pair[0]);

        return `${accString} ${moduleString}`;
      },
      '',
    );
}

exports.dependenciesToString = dependenciesToString;
