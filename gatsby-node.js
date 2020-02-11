/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

// registering the post so we can use the urls
exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions

  // resolve your template
  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              author
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // build page from the path of the markdown page, and using the template as the component to use
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}