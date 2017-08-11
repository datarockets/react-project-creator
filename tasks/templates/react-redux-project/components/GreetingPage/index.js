import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

export default class GreetingPage extends Component {
  render = () => (
    <div className="main-container">
      <div className="header">
        <div className="company-logo-container">
          <div className="company-logo rounded-edges">
            <span className="company-logo-alignment">
              =>
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="mr-reactor-logo-wrapper">
          <img src={logo} className="mr-reactor-logo" alt="mr-reactor-logo" />
        </div>
        <p className="greeting">
          <span className="mr-reactor-span">Mr. Reactor</span> here to help you!
        </p>
      </div>
    </div>
  );
}
