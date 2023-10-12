import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: <source />,
    };
  }
  handleBasket = () => {
    this.setState({
      src: '../assets./basketball.jpg',
    });
  };
  render() {
    return (
      <center>
        <h1>Image UI App</h1>
        <button onClick={this.handleBasket}>Basketball</button>
        {/* <button onClick={handleBasket()}>Cricket</button>
        <button onClick={handleBasket()}>Laptop</button>
        <button onClick={handleBasket()}>Phone</button>
        <button onClick={handleBasket()}>PubG</button>
        <button onClick={handleBasket()}>Tiger</button> */}
        <img src="this.state.src" alt="" />
      </center>
    );
  }
}

export default App;
