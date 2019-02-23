import React, { Component } from 'react';

class Circle extends Component {
  render() {
    let CircleStyle = {
      padding: '10px',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'inline-block',
      margin: '20px',
      backgroundColor: this.props.bgcolor
    };
    return (
      <div style={CircleStyle}>
      </div>
    );
  }
}

export default Circle;