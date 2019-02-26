import React, { Component } from 'react';
import './A.css';

/**
 * 这就是一个高阶组件
 * @param {} WarppedComponent 
 */
function A (WarppedComponent) {
  return class A extends Component {
    render() {
      return (
        <div className="a-container">
          <div className="header">
            <div className="title">提示</div>
            <div className="close">X</div>
          </div>
          <div>
            <WarppedComponent></WarppedComponent>
          </div>
        </div>
      );
    }
  }
}

export default A;