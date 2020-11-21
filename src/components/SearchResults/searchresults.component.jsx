import React from 'react'
import { withRouter } from 'react-router-dom';
import hearth from "../../assets/img/hearth.png"
import imdb from "../../assets/img/IMDB-icon.png"
import { MovieContext } from '../../context/MovieContext';

import "./searchresults.scss";

class SearchResults extends React.Component {
  static contextType = MovieContext;

  render() {
    const { movies, addFavorite } = this.context;
    const { history } = this.props;

    return (
      <main className="search__results">
        <h1 className="search__results--heading">Search Results <span className="search__results--span">Godfather</span></h1>
        <div className="moviescontainer">
          {movies.length && 
            movies.map(movie => (
              <div key={movie.imdbID} className="moviescontainer__movie moviescontainer__movie--1">
                <div
                  style={{ backgroundImage: `url(${movie.Poster})` }}
                  className="image__container"
                >
                  <div className="image__container--type">Action</div>
                  <div 
                    className="image__container--favbtn"
                    onClick={() => addFavorite(movie)}
                  >
                    <img src={hearth} alt="favbtn" />
                  </div>
                </div>
                <div className="moviescontainer__movie__imdb">
                  <div className="moviescontainer__movie__imdb--img">
                    <img src={imdb} alt="imdb_icon" />
                  </div>
                  <span className="moviescontainer__movie__imdb--rate">8.8</span>
                </div>
                <div className="moviescontainer__movie__paragraph">
                  <span className="moviescontainer__movie__paragraph--year">{movie.Year}</span>            
                  <h2
                    onClick={() => history.push(`/results/${movie.imdbID}`)}
                    className="moviescontainer__movie__paragraph--heading">
                    {movie.Title}
                  </h2>
                  <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                    reluctant son.
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    )
  }
}


export default withRouter(SearchResults);