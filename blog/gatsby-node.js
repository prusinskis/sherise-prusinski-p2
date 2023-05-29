/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    
      query MyAllContentfulPageBlogPost {
        allContentfulPageBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulPageBlogPost.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: require.resolve("./src/templates/blog-post.js"),
          context: {
            slug: edge.node.slug,
          },
          defer: true,
        })
      })
      resolve()
    })
  })
}