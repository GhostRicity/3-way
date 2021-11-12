import React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
//styles
import "../SCSS/styles.scss"

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ImageCard from "../components/imgCard"
import PortfolioBar from "../components/sideBar"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: id}) {
        edges {
          node {
            id
            frontmatter {
              title
              url
              date
              description
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1920,  quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }

    `)
  return (
      <div>
      <SEO title="Portfolio" />
        <div>
        <PortfolioBar />
          <div className="flex-container">
          {data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
                .map(edge =>
                  <ImageCard key={edge.node.id} data={edge.node}/>
                )
          }
          </div>
        </div>
      </div>

  )
}

export default PortfolioPage
