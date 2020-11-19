import React from 'react'
import hearth from "../../assets/img/hearth.png"
import imdb from "../../assets/img/IMDB-icon.png"

import "./searchresults.scss";

export default function SearchResults({ movies, inputValue }) {
  return (
    <main className="search__results">
      <h1 className="search__results--heading">Search Results <span className="search__results--span">Godfather</span></h1>
      <div className="moviescontainer">
        {/* <div className="moviescontainer__movie moviescontainer__movie--1">
          <div className="image__container">
            <div className="image__container--type">Action</div>
            <div className="image__container--favbtn"><img src={hearth} alt="favbtn" /></div>
          </div>
          <div className="moviescontainer__movie__imdb">
            <div className="moviescontainer__movie__imdb--img">
              <img src={imdb} alt="imdb_icon" />
            </div>
            <span className="moviescontainer__movie__imdb--rate">8.8</span>
          </div>
          <div className="moviescontainer__movie__paragraph">
            <span className="moviescontainer__movie__paragraph--year">2019</span>
            <h2 className="moviescontainer__movie__paragraph--heading">Be Yourself & Never Su..</h2>
            <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
              reluctant son.
            </p>
          </div>
        </div> */}

        
        {movies.length && 
          movies.map(movie => (
            <div key={movie.imdbID} className="moviescontainer__movie moviescontainer__movie--1">
              <div
                style={{ backgroundImage: `url(${movie.Poster})` }}
                className="image__container"
              >
                <div className="image__container--type">Action</div>
                <div className="image__container--favbtn"><img src={hearth} alt="favbtn" /></div>
              </div>
              <div className="moviescontainer__movie__imdb">
                <div className="moviescontainer__movie__imdb--img">
                  <img src={imdb} alt="imdb_icon" />
                </div>
                <span className="moviescontainer__movie__imdb--rate">8.8</span>
              </div>
              <div className="moviescontainer__movie__paragraph">
                <span className="moviescontainer__movie__paragraph--year">{movie.Year}</span>
                <h2 className="moviescontainer__movie__paragraph--heading">{movie.Title}</h2>
                <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                  reluctant son.
                </p>
              </div>
            </div>
          ))
        }
        {/* <div className="moviescontainer__movie moviescontainer__movie--1">
          <div className="image__container">
            <div className="image__container--type">Action</div>
            <div className="image__container--favbtn"><img src={hearth} alt="favbtn" /></div>
          </div>
          <div className="moviescontainer__movie__imdb">
            <div className="moviescontainer__movie__imdb--img">
              <img src={imdb} alt="imdb_icon" />
            </div>
            <span className="moviescontainer__movie__imdb--rate">8.8</span>
          </div>
          <div className="moviescontainer__movie__paragraph">
            <span className="moviescontainer__movie__paragraph--year">2019</span>
            <h2 className="moviescontainer__movie__paragraph--heading">Be Yourself & Never Su..</h2>
            <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
              reluctant son.
            </p>
          </div>
        </div>

        <div className="moviescontainer__movie moviescontainer__movie--1">
          <div className="image__container">
            <div className="image__container--type">Action</div>
            <div className="image__container--favbtn"><img src={hearth} alt="favbtn" /></div>
          </div>
          <div className="moviescontainer__movie__imdb">
            <div className="moviescontainer__movie__imdb--img">
              <img src={imdb} alt="imdb_icon" />
            </div>
            <span className="moviescontainer__movie__imdb--rate">8.8</span>
          </div>
          <div className="moviescontainer__movie__paragraph">
            <span className="moviescontainer__movie__paragraph--year">2019</span>
            <h2 className="moviescontainer__movie__paragraph--heading">Be Yourself & Never Su..</h2>
            <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
              reluctant son.
            </p>
          </div>
        </div> */}
      </div>
    </main>
  )
}
