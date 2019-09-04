import React, { Component } from 'react';
import Flowers from './Flowers/Flowers.js';
import Button from '../List/Item/Button/Button.js';

export class Header extends Component {
  render() {
    return (
      <div style={{padding: "20px",background: "linear-gradient(to top, #f6f6f6, #fff)"}}>
        {this.props.news.slice(4, 5).map(item =>
        <div key={item.id}>
          <h1 style={{fontSize: "24px", fontFamily: "Arial", fontWeight: "bold"}}>New! {item.title}</h1>
          <p style={{fontWeight: "bold", fontFamily: "Arial"}}>Includes</p>
            <Flowers items={item.emoji}/>
            <div style={{textAlign: "right"}}><Button value={item.price}  title={item.title}/></div>
        </div>
      )}
      </div>
    )
  }
}

export default Header
