// const { graphql } = require("gatsby")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fileAbsolutePath
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Create Paginated pages for posts
  // const postPerPage = 2
  // const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   actions.createPages({
  //     path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
  //     component: require.resolve("./src/postArchive.js"),
  //     context: {
  //       limit: postPerPage,
  //       skip: i * postPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })

  // Create single blog posts
  data.allMdx.edges.forEach(edge => {
    let slug = edge.node.frontmatter.slug
    const id = edge.node.id

    if (edge.node.fileAbsolutePath.match(/content\/articles/)) {
      slug = "articles/" + slug
    } else if (edge.node.fileAbsolutePath.match(/src\/posts\/notes/)) {
      slug = "notes/" + slug
    }

    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/singlePost.js`),
      context: { id },
    })
  })
}
