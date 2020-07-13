import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* https://stackoverflow.com/questions/46156968/use-if-statement-in-react-jsx */}
        {/* {if(this.props.opacity >= 0.2){
            return <div className="color-box" style={{opacity: this.props.opacity}}>
         }else{
           return null
         }
        } */}

        {(this.props.opacity >= 0.2) ?  <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}

