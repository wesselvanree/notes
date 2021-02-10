import React from "react"
import { graphql } from "gatsby"
import "../styles/main.scss"

const Notes = ({ data }) => {
  let posts = []
  for (let i = 0; i < data.allMdx.edges.length; i++) {
    posts.push(
      <li key={i}>
        <h3>
          <a href={data.allMdx.edges[i].node.frontmatter.slug}>
            {data.allMdx.edges[i].node.frontmatter.title}
          </a>
        </h3>
      </li>
    )
  }
  return (
    <div className="container">
      <h1 className="main-title">Notes</h1>
      <ul>{posts}</ul>
    </div>
  )
}

export const query = graphql`
  query allNotesQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

export default Notes
