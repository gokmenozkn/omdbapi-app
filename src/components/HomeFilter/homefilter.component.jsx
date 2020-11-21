import React from 'react'
import { useHistory } from 'react-router-dom';

import "./homefilter.scss"

function HomeFilter() {
  let history = useHistory();

  function goResults() {   
    history.push("/results")
    console.log(history);
  }


  return (
    <section className="filter">
      <select className="filter__select" name="years" required>
        <option value="year" disabled defaultValue>Year</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
      </select>

      <select className="filter__select" name="types" required>
        <option value="type" disabled defaultValue>Type</option>
        <option value="horror">Horror</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="biography">Biography</option>
      </select>

      <div className="filter__searchbox">
        <form className="search">
          <input 
            className="search__input" 
            type="text" 
            placeholder="Enter movie name here" />
          <button className="search__button" type="submit"><i className="fas fa-search"></i></button>
        </form>
      </div>

      <div className="filter__button">
        <button 
          onClick={goResults}
        >
          Search <span className="filter__button--arrow">&#8594;</span>
        </button>
      </div>
    </section>
  )
}

export default HomeFilter;