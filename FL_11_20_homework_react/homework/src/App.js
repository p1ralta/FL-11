import React, { Component } from 'react';
import Main from './Main';
import Basket from './Backet/Basket.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/emoji-shop')
      .then(response => response.json())
      .then(data => this.setState({ data: data.emoji }));
  }

  render() {
    const items = this.state.data;
    return (
      <div className="Container">
       <Main items={items} />
       <Basket />
      </div> 
    )
  }
}

export default App;

