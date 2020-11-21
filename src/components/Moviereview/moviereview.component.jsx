import React from 'react'
import imdb from "../../assets/img/IMDB-icon.png"
import addfav from "../../assets/img/addfav.svg"
import "./moviereview.scss"

export default function Moviereview({ movieData }) {
  return (
    <main className="overview">
      <div 
        style={{ backgroundImage: `url(${movieData.Poster})` }}
        className="overview__img"></div>
      <div className="overview__texts">

        <div className="overview__texts--rating">
          <div className="overview__texts--rating__img">
            <img src={imdb} alt="imdb" />
            <span className="overview__texts--rating__span">{movieData.imdbRating}</span>
          </div>
          <button className="overview__texts--rating__favbtn">
            <img src={addfav} alt="addfav" />
            <span>Add to favorites</span>
          </button>
        </div>

        <div className="overview__texts--paragraph">
          <span className="overview__texts--paragraph__span">{movieData.Year}</span>
          <h1>{movieData.Title}</h1>
          <p>
            {movieData.Plot}
          </p>

          <div className="overview__texts--paragraph__genres">
            <ul>
              <li>Action</li>
              <li>Biography</li>
              <li>Horror</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  )

}
