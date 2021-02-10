import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const caseStudy = ({ pageContext, data }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <h2>{data.mdx.frontmatter.subtitle}</h2>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer title="My Stuff!">{data.mdx.body}</MDXRenderer>
    </>
  )
}

export default caseStudy

export const pageQuery = graphql`
  query CaseStudyQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
      }
      id
      body
      excerpt
    }
  }
`
