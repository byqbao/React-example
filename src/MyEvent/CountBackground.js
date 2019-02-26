import React, { Component } from 'react';
import Counter from './Counter';

class CountBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this);
  }

  increase(e) {
    let currentCount = this.state.count;
    // e.shiftKey:按住shift为true，不按为false
    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({
      count: currentCount
    });
  }
  render() {
    let countBackground = {
      width: 250,
      padding: '40px',
      background: '#443599',
      borderRadius: '10px',
      textAlign: 'center'
    };
    return (
      <div style={countBackground}>
        <Counter count={this.state.count}/>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default CountBackground;