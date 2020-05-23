import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"

class PostTemplate extends React.Component {
  render() {
    const post =  this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteTitle.title

    return (
      <Layout location={this.props.location} tittle ={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
         className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
       >
         <header>
           <h1 className="post-content-title">{post.frontmatter.title}</h1>
         </header>

         {post.frontmatter.description && (
           <p class="post-content-excerpt">{post.frontmatter.description}</p>
         )}

         {post.frontmatter.thumbnail && (
           <div>
             <Img
               fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
               alt={post.frontmatter.title}
             />
           </div>
         )}

         <div
           dangerouslySetInnerHTML={{ __html: post.html }}
         />

         <footer>
           {/* There are two options for how we display the byline/author-info.
       If the post has more than one author, we load a specific template
       from includes/byline-multiple.hbs, otherwise, we just use the
       default byline. */}
         </footer>
       </article>
     </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  }
`
