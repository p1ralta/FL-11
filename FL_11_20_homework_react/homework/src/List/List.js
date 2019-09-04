import React, { Component } from 'react';
import Item from './Item/Item.js';
import './List.css';

export class List extends Component {

  render() {
    return (
      <ul  className="List">
        {this.props.items.map(item =>
          <Item key={item.id} item={item} />
        )}
      </ul>
    )
  }
}

export default List
