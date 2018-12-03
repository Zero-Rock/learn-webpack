import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  changeNum = (type) => {
    const { count } = this.state;
    if (type === '-') {
      this.setState({
        count: count > 0 ? count - 1 : count,
      });
    } else if (type === '-') {
      this.setState({
        count: count + 1,
      });
    }
  }

  render() {
    const spanStyle = {
      fontSize: '20px',
      cursor: 'point',
    };
    return (
      <div>
        <h1>Webpack</h1>
        <div>
          <span style={spanStyle} onClick={() => { this.changeNum('-'); }}>-</span>
          <span style={spanStyle}>{this.state.count}</span>
          <span style={spanStyle} onClick={() => { this.changeNum('+'); }}>+</span>
        </div>
      </div>
    );
  }
}

render(<Button />, window.document.getElementById('app'));
