import { Component } from "react";
import "./App.css";

class CounterApp extends Component {
  state = { count: 0 };

  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Count</h1>
          <p className="counter">{count}</p>
          <div>
            <button
              className="decrease"
              type="button"
              onClick={this.onDecrement}
            >
              Decrease
            </button>
            <button
              className="increase"
              type="button"
              onClick={this.onIncrement}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterApp;
