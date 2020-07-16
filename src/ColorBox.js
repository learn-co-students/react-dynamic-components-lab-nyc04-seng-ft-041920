import React, { Component } from 'react';
import App from './App.js';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opa = this.props.opacity
    if (opa >= 0.2){
      return (
        <div className="color-box" style={{opacity: opa}}>
          <ColorBox opacity={opa - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }

}

