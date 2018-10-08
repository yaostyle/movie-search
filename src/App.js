import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    console.log("this is my initializer");

    const movies = [
      { id: 0, title: "Avengers: Infinity War", overview: "As the avengers an  their allies have continues to protect the world..." },
      { id: 1, title: "Avenger", overview: "This is my second overview..." }
    ]

    this.state = {
      rows: [
        <p key="1">This is my row0</p>,
        <p key="2">This is my row1</p>,
        <p key="3">This is my row2</p>
      ]
    }

    var movieRows = [];

    movies.forEach((movie) => {
      console.log(movie.title)
      movieRows.push(<p>movie title: {movie.title}</p>)
    })

    this.state = { rows: movieRows }
  }

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="green_app_icon.svg" alt="app icon" />
              </td>
              <td width="180">
                <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingBottom: 8,
          paddingLeft: 16,
        }} placeholder="Enter search term" />

        {this.state.rows}


      </div>
    );
  }
}

export default App;
