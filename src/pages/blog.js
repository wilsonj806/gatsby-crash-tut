import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'


const BlogPage = () => {
  const queryData = useStaticQuery(graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            path
            title
          }
        }
      }
    }
  }
`)

  return (
  <Layout>
    <h1>Latest Posts</h1>
    { queryData.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by: {post.node.frontmatter.author}</small>
        <br/>
        <br/>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br/>
        <br/>
        <hr/>
      </div>
    ))}
  </Layout>
)}

// NOTE this is the non-hooks way
// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             author
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPage
