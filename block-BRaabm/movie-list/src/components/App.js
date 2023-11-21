import React from 'react';
import Header from './Header';
import Movie from './Movie';
import '../style.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Movie />
      </div>
    </>
  );
}

export default App;
