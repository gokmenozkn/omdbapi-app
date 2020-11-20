import React from 'react'

import "./banner.scss"

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__yellow"></div>
      <div className="banner__text">
        <div className="banner__text--img"></div>
        <h1 className="banner__text--heading1">Welcome to</h1>
        <h2 className="banner__text--heading2">MovieUP</h2>
        <p className="banner__text--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
    </section>
  )
}
