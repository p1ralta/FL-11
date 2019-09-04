import React, { Component } from 'react';
import './Flowers.css';

export class Flowers extends Component {

  render() {
    return (
      <div style={{display: "flex"}}> 
        {this.props.items.slice(2, 5).map(item => (
          <div className="Flowers" key={item.codes}>{item.char}</div>
        ))}
      </div>
    )
  }
}

export default Flowers
