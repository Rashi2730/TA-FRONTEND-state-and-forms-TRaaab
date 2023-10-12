import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }
  render() {
    let labels = ['basketball', 'cricket', 'laptop', 'phone', 'tiger'];
    return (
      <>
        <div>
          {labels.map((label) => (
            <button
              className="button"
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <img
          src={`./images/${this.state.active}.jpg`}
          alt={this.state.active}
        />
      </>
    );
  }
}

export default App;
