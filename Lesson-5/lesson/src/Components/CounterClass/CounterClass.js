import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleCountUp = () => {
    const prev = this.state.count;
    this.setState({ count: prev + 1 });
  };

  handleCountDown = () => {
    const prev = this.state.count;
    if (this.state.count <= 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: prev - 1 });
    }
  };

  render() {
    return (
      <div className="Counter">
        <button onClick={this.handleCountUp}> +1</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleCountDown}> -1</button>
      </div>
    );
  }
}
