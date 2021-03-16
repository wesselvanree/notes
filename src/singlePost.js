import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./styles/post.scss"
import Img from "gatsby-image"

const singlePost = ({ data }) => {
  let subTitle = ""
  if (data.mdx.frontmatter.subtitle !== "") {
    subTitle = (
      <h2 className="article-subtitle">{data.mdx.frontmatter.subtitle}</h2>
    )
  }

  let featuredImgFluid = ""
  if (data.mdx.frontmatter.featuredImage !== null) {
    featuredImgFluid = (
      <Img fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid} />
    )
  }

  return (
    <article id="article">
      <div className="table-of-contents">{data.mdx.tableOfContents}</div>
      <div className="article-header">
        {/* <p className="article-breadcrumbs">
          <Link to="/">Home</Link> &nbsp;/&nbsp; {data.mdx.frontmatter.title}
        </p> */}
        {/* <p className="article-date">{data.mdx.frontmatter.date}</p> */}
        <h1 className="pagetitle">{data.mdx.frontmatter.title}</h1>
        {subTitle}
        <p className="article-metadata">
          {data.mdx.frontmatter.date} &nbsp;• &nbsp;
          {data.mdx.fields.readingTime.text}
        </p>
        {featuredImgFluid}
        {/* <div className="seperator-line"></div> */}
      </div>
      <div className="pagebody">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </article>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      body
      headings {
        depth
        value
      }
      fields {
        readingTime {
          text
        }
      }
      excerpt
    }
  }
`
