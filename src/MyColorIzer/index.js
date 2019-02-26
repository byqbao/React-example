import React, { Component } from 'react';
import './index.css';

class MyColorIzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      bgColor: ''
    }
    this.setColor = this.setColor.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }
  setColor(e) {
    this.setState({
      color: e.target.value
    });
  }
  setNewColor() {
    this.setState({
      bgColor: this.state.color
    })
    this._input.value = '';
    this._input.focus();
  }
  render() {
    var bgcolor = {
      backgroundColor: this.state.bgColor
    }
    return (
      <div className="MyColorIzer">
        <div className="izer" style={bgcolor}></div>
        <input ref={(a)=>{this._input=a}} onChange={this.setColor} className="izer-input" placeholder="输入一个颜色" />
        <button onClick={this.setNewColor} className="izer-btn">show</button>
      </div>
    );
  }
}

export default MyColorIzer;