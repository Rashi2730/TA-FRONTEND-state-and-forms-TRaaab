import React from 'react';
import movies from '../data.json';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandInfo: 'false',
      active: '',
    };
  }

  render() {
    let movieInfo = movies.map((elm) => elm);
    return (
      <>
        <main className="box">
          <ul className="cards">
            {movieInfo.map((elm, i) => (
              <li className="card">
                <h2>{elm.Title}</h2>
                <img src={elm.Images} alt="" />
                <p>Released on : {elm.Released}</p>
                {this.state.expandInfo ? (
                  <button
                    className="more"
                    onClick={() => {
                      this.setState({ active: i });
                    }}
                  >
                    More Info
                  </button>
                ) : (
                  ''
                )}
                {i === this.state.active ? (
                  <div>
                    <span className="flex-info">
                      <p>Director : {elm.Director}</p>
                      <button
                        className="cross"
                        onClick={() => {
                          this.setState({
                            active: !i,
                          });
                        }}
                      >
                        ❌
                      </button>
                    </span>
                    <p> Country : {elm.Country}</p>
                    <p>Genre : {elm.Genre}</p>
                  </div>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default Movie;
