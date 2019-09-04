import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {

  render() {
    return (
      <button className="Button" onClick={this.props.getData}>
        Get ({this.props.value})
      </button>
    )
  }
}

export default Button
