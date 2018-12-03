import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Page Index</h1>
        <Button>antd button</Button>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
