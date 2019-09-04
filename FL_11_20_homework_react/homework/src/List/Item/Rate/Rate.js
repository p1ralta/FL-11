import React, { Component } from 'react';
import StarSharpIcon from '@material-ui/icons/StarSharp'
import StarHalfSharpIcon from '@material-ui/icons/StarHalfSharp';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import './Rate.css';

export class Rate extends Component {

  constructor(props){
    super(props);
    this.arr = [];
    this.stars = props.stars;
    for (let i = 0; i < 5; i++) {
      if( this.stars > i ) {
        if ((this.stars-i)>=1) {
          this.arr.push((<StarSharpIcon key={i}/>));
        } else {
          this.arr.push((<StarHalfSharpIcon key={i}/>));
        }
      } else {
        this.arr.push((<StarBorderSharpIcon key={i}/>));
      }
    }
  }

  render() {
    return (
    <div className="Rate">
      {this.arr}
    </div>
    )
  }
  }
  
export default Rate
