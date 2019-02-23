import React, { Component } from 'react';
import Circle from './Circle';

class MyObject extends Component {

  /**
   * 数据逻辑与UI结合
   * 先执行一段逻辑代码
   * 然后在执行UI的代码
   * js逻辑可以操作组件并实时地去显示UI
   */
  showCircle(number) {
    let colors = ['#ff4400', '#ff0088', '#339911', '#118844'];
    let Circles = [];
    let thisNumber = number || 1;

    for(let i=0; i<thisNumber; i++) {
      let ran = Math.floor(Math.random() * colors.length);
      Circles.push(<Circle key={i+colors[ran]} bgcolor={colors[ran]} />);
    }
    console.log(Circles);
    return Circles;
  }

  render() {
    return (
      <div>
        {this.showCircle(100)}
      </div>
    );
  }
}

export default MyObject;