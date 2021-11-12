import React from "react";
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//styles
import "../SCSS/styles.scss"
import "../SCSS/sidebar.scss"


export default function PortfolioBar() {
  return(
    <div className="sideBackground">
      <AniLink className="verTextR" swipe direction="left" to="/">
        <p className="neon" >H<span id="offset">o</span>me</p>
      </AniLink>
    </div>
  )
}
