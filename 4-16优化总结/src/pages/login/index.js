import React, { Component } from 'react';
import { render } from 'react-dom';
import { Input } from 'antd';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Page Login</h1>
        <Input placeholder="antd input" />
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
