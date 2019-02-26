import React, { Component } from 'react';

class Counter extends Component {
  render() {
    let countStyle = {
      fontSize: 70,
      color: '#fff',
      fontWeight: 'bold'
    };

    return (
      <div style={countStyle}>{this.props.count}</div>
    );
  }
}

export default Counter;