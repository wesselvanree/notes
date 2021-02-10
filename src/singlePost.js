import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./styles/post.scss"

const singlePost = ({ data }) => {
  return (
    <article id="article">
      <div className="table-of-contents">{data.mdx.tableOfContents}</div>
      <div className="article-header">
        <p className="article-breadcrumbs">
          <Link to="/">Home</Link> &nbsp;&gt;&nbsp; {data.mdx.frontmatter.title}
        </p>
        {/* <p className="article-date">{data.mdx.frontmatter.date}</p> */}
        <h1 className="pagetitle">{data.mdx.frontmatter.title}</h1>
        {/* <div className="seperator-line"></div> */}
        <p className="article-subtitle">{data.mdx.frontmatter.subtitle}</p>
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
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
      }
      id
      body
      headings {
        depth
        value
      }
      excerpt
    }
  }
`
