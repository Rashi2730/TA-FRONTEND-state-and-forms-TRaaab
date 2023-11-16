import React from 'react';
import Header from './Header';
import faqs from './ques.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQues: null,
    };
  }
  render() {
    return (
      <>
        <Header />
        <ul>
          {faqs.map((ques, i) => (
            <li
              className={this.state.activeQues === i ? 'active--ques' : 'ques'}
            >
              <h2
                onClick={() => {
                  this.setState({ activeQues: i });
                }}
              >
                {ques.Q} {this.state.activeQues === i ? '👆🏻' : '👇🏻'}
              </h2>
              {i === this.state.activeQues && <p>{ques.A}</p>}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
