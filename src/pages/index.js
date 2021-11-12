import React from "react"
import { Link } from "gatsby"
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
//bootstrap
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

//styles
import "../SCSS/styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="eddythedev" />
      <Container fluid className="cont">
        <Jumbotron fluid>
          <div className="centerText">
            <h1 className="neon">EDDY</h1>
            <h2 className="neon">The</h2>
            <h1 className="neon">DEV</h1>
          </div>
        </Jumbotron>


      <AniLink className="verText" swipe direction="right" to="portfolio">
          <p className="neon">PORTFOLIO</p>
      </AniLink>
      <AniLink className="verTextR" swipe direction="left" to="portfolio">
        <p className="neon">BUISSNES</p>
      </AniLink>
      <AniLink className="verTextB" swipe direction="up"  to="about">
        <div className="centerText">
          <p className="neon">AB<span id="offset">O</span>UT ME</p>
        </div>
      </AniLink>


      </Container>
  </Layout>
)

export default IndexPage
