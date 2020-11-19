import React from 'react';

import "./filterbox.scss";

export default function FilterBox() {
  return (
    <section className="filterbox">
      <select className="filterbox__select" name="years" required>
        <option value="year" disabled defaultValue>Year</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
      </select>

      <select className="filterbox__select" name="types" required>
        <option value="type" disabled defaultValue>Type</option>
        <option value="horror">Horror</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="biography">Biography</option>
      </select>

      <div className="filterbox__searchbox">
        <table className="search">
          <tbody>
            <tr>
              <td>
                <input className="search__input" type="text" placeholder="Enter movie name here" />
              </td>
              <td>
                <a href="/"><i className="fas fa-search"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="filterbox__button">
        <a href="/">Search <span className="filterbox__button--arrow">&#8594;</span></a>
      </div>
  </section>
  )
}
