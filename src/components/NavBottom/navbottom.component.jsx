import React from "react";

import "./navbottom.scss";

export default function NavBottom() {
  return (
    <div className="header__navbottom">
      <div className="header__navbottom--links">
        <ul>
          <li className="header__navbottom--links-active">Home /</li>
          <li>Search Results</li>
        </ul>
      </div>
    </div>
  )
}
