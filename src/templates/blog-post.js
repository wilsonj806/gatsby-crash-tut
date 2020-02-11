import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Template = ({ data }) => {
  const post = data.markdownRemark

  console.dir(post.html)
  // FIXME Not XSS safe
  return (
    <Layout>
      <Link to='/blog'>Go back to blogs</Link>
      <hr/>
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by: {post.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML={{__html: post.html }}/>
    </Layout>
  )
}

// NOTE this is the non-hooks way
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
     html
     frontmatter {
       path
       title
       author
       date
     }
    }
  }
`

export default Template;