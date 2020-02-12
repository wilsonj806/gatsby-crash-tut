# Gatsby And GraphQL
## Overview
Gatsby uses GraphQL to access data to present on the front end and there's quite a lot of moving parts there.

## A brief review
GraphQL is a query language made and open sourced by Facebook to streamline how you communicate with an API. The advantage is that you only make requests and get responses from one singular `/graphql` endpoint, whereas in a REST API you might have a variety of urls to access your data. In addition, a lot of times when you try access your data, you get a lot of fluff, GraphQL lets you define what data you want back so you don't have anything unecessary there.

## How to use GraphQL in Gatsby
Gatsby and several plugins use GraphQL to query for data, and build pages from data. Within Gatsby, we identify two types of queries, Static Queries and Page Queries.

Static Queries are what they sound like, static GraphQL queries, so that means you can't use variables like `query MyQuery($path: String)`. These generally go into React components where you know they'll depend on some static GraphQL data.

Page queries on the other hand are only allowed in template pages/ pages in general, and unlike Static Queries, *can* use variables.

See [Gatsby Docs](https://www.gatsbyjs.org/docs/static-query/#how-staticquery-differs-from-page-query) for more.

## Static Queries
It's pretty straight-forwards, within your React component you do the below:
```js
import React from 'react'
import { graphql, useStateQuery } from 'gatsby'

const myThing = () => {
  const MyData = useStateQuery(graphql`
  query MyQuer {
    allFiles {
      edges {
        node {
          id
        }
      }
    }
  }
`)

  return (
    <div>
      { MyData }
    </div>
  )
}
```

Easy peasy, and pretty slick thanks to React Hooks

## Page Queries
Page queries can't use the `useStaticQuery` hook  and look like the below:

```js
import React from 'react'
import { graphql } from 'gatsby'

const myThing = () => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by: {post.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML={{__html: post.html }}/>
    </div>
  )
}
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
```

Note how our query has the `$path` variable in it. If we tried that with `useStaticQuery`, Gatsby would crash.