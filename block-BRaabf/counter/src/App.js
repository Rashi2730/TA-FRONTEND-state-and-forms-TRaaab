import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }
  handleIncrement = () => {
    this.setState({
      count:
        this.state.count + this.state.step > this.state.max
          ? this.state.count
          : this.state.count + this.state.step,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    let arr = [5, 10, 15];
    let arr2 = [15, 100, 200];
    return (
      <>
        <h1 className="center">{this.state.count}</h1>
        <div className="container center ">
          <h3>Steps</h3>
          {arr.map((step) => (
            <button
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? 'active--step' : ''}
            >
              {step}
            </button>
          ))}

          <h3>Max</h3>
          {arr2.map((max) => (
            <button
              onClick={() => {
                this.setState({ max: max });
              }}
              className={this.state.max === max ? 'active--step' : ''}
            >
              {max}
            </button>
          ))}

          <div className="container">
            <button className="btn" onClick={this.handleIncrement}>
              Increment
            </button>
            <button className="btn" onClick={this.handleDecrement}>
              Decrement
            </button>
            <button className="btn" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
