import React from 'react';
import Header from './Header';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: '',
    };
  }
  render() {
    return <Header />;
  }
}

export default App;
