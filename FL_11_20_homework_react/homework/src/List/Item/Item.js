import React, { Component } from 'react';
import Rate from './Rate/Rate.js';
import Button from './Button/Button.js';
import './Item.css';

export class Item extends Component {
  setCharStyle = () => {
    return {
      color: "#26534e",
      fontSize: "40px"
    }
  }
  setTitleStyle = () => {
    return {
      fontSize: "17px",
      fontFamily: "Arial",
      fontWeight: "Bold",
      margin: "10px 0px 0px 0px"
    }
  }
  render() {
    const {emoji, title, price, stars} = this.props.item;
    return (
      <li className="Item">
      {emoji.slice(0, 1).map(code => 
        <div key={code.codes}>
          <div style={this.setCharStyle()}>{code.char}</div>
          <p style={this.setTitleStyle()}>{title}</p>
          <Rate stars={stars}/>
          <Button value={price} title={title} />
        </div>
      )}
    </li>
    )
  }
}

export default Item
