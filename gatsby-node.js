const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/pages/single-blog.js')

  return graphql(`
    query BlogIndexQuery {
      allContentfulBlogPost {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: postTemplate,
        context: { url: node.path }
      })
    })
  })
}