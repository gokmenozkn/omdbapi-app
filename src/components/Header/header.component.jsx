import React from 'react'
import NavBottom from '../NavBottom/navbottom.component'

import "./header.scss"

export default function Header() {
  return (
    <section className="header">
      <nav className="header__navbar">
        <div className="header__navbar--logo">
          <a href="/">Movie<span>UP</span></a>
        </div>
        <div className="header__navbar--links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/" className="active">Favorites</a></li>
          </ul>
        </div>
        <div className="header__navbar--searchbox">
          <table className="search">
            <tr>
              <td>
                <input className="search__input" type="text" placeholder="Enter movie name here" />
              </td>
              <td>
                <a href="/"><i className="fas fa-search"></i></a>
              </td>
            </tr>
          </table>
        </div>
      </nav>

      <NavBottom />      
    </section>
  )
}
