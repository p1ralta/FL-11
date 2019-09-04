import React, { Component } from 'react';
import List from './List/List.js';
import Header from './Header/Header.js';

export class Main extends Component {
  
  render() {
    return (
      <div style={{width: "70%", marginRight: "20px"}}>
        <Header news={this.props.items}/>
        <List items={this.props.items} />
      </div>
    )
  }
}

export default Main
