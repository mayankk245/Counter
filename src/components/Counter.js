import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }
  incrementHandler(e) {
    const currentCount = this.state.count;
    this.setState({ count: currentCount + 1 });
    e.preventDefault();
  }
  decrementHandler(e) {
    const currentCount = this.state.count;
    this.setState({ count: currentCount - 1 });
    e.preventDefault();
  }
  resetHandler(e) {
    this.setState({ count: 0 });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button id="i" onClick={this.incrementHandler}>
          +
        </button>
        <button id="r" onClick={this.resetHandler}>
          @
        </button>
        <button id="d" onClick={this.decrementHandler}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
