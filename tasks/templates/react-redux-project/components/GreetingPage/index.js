import React, { Component } from 'react';
import rcm from 'src/utils/rcm';

import logo from './logo.svg';

import styles from './styles.css';
class GreetingPage extends Component {
  render() {
    return (
      <div styleName="main-container">
        <div styleName="header">
          <div styleName="company-logo-container">
            <div styleName="company-logo rounded-edges">
              <div styleName="company-logo-alignment">
                =>
              </div>
            </div>
          </div>
        </div>
        <div styleName="wrapper">
          <div styleName="mr-reactor-logo-wrapper">
            <img src={logo} styleName="mr-reactor-logo" alt="mr-reactor-logo" />
          </div>
          <p styleName="greeting">
            <span styleName="mr-reactor-span">Mr. Reactor</span> here to help you!
          </p>
        </div>
      </div>
    );
  }
}

export default rcm(styles)(GreetingPage);
