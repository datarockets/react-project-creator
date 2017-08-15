import CSSModules from 'react-css-modules';

export default (styles, options = {}) => component =>
  CSSModules(component, styles, {
    allowMultiple: true,
    errorWhenNotFound: false,
    ...options,
  });
