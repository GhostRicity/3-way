import React from "react"
import { Link } from "gatsby"

//styles
import "../SCSS/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutPage = () => (
  <Layout>
    <SEO  title="About Eddy"/>
    <Container fluid className="cont">
      <Row className="centerText">
        <Col className="spacing">
            <AniLink className="verTextUp" swipe direction="down" to="/">
              <p className="neon">Ho<span id="offset">m</span>e</p>
            </AniLink>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="x">
            <Image/>
          </div>
        </Col>
        <Col sm={8} >
          <h2 className="neon centerText">Call me Eddy</h2>
          <p className="spacing">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
      <Row className="spacing">
        <Col sm>
          <h2 className="neon centerText">Curriculum vitae</h2>>
        </Col>
      </Row>
      <Row>
      <Col sm>
        <h2 className="neon centerText">contacts</h2>
        <p className="spacing">My CV will go hear!</p>
      </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
