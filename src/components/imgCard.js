import React, { Components } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
//bootstrap
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ImageCard = ({ data }) => {
    return (
      <div>
        <Container className="cardContainer">
          <Img
            fluid={data.frontmatter.thumbnail.childImageSharp.fluid}
            alt={data.frontmatter.title + ' - Featured Image'}
            objectFit="center"
            objectPosition="50% 50%"
            className="cardImage"
          />

            <div className="cardOverlay">
              <a className="neon" href={data.frontmatter.url} target="blank">
                <h1>{data.frontmatter.title}</h1>
                <p>{data.frontmatter.description}</p>
              </a>
            </div>

        </Container>
        </div>

    )

}
export default ImageCard
