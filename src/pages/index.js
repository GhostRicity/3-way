import React from "react"
import { Link } from "gatsby"
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
//styles
import "../SCSS/styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


    <p className="verText">PORTFOLIO</p>
    <p className="verTextB">ABAUT ME</p>
    <p className="verTextR">BUISSNES</p>

    <AniLink swipe direction="right" to="404"> <br />
      <FaArrowLeft />
    </AniLink>
    <AniLink swipe direction="left" to="404"> <br />
      <FaArrowRight />
    </AniLink>
    <AniLink swipe direction="up" to="404"> <br />
      <FaArrowDown  />
    </AniLink>

  </Layout>
)

export default IndexPage
