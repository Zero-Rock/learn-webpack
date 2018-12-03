/**
 * Created by PanJiankang on 2018/8/16 下午4:13.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.css';

class Button extends Component {
  render() {
    return <h1>Hello,PDF PREVIEW</h1>;
  }
}

render(<Button />, window.document.getElementById('app'));
