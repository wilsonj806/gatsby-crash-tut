# Gatsby And GraphQL
## Overview
Gatsby uses GraphQL to access data to present on the front end and there's quite a lot of moving parts there.

## A brief review
GraphQL is a query language made and open sourced by Facebook to streamline how you communicate with an API. The advantage is that you only make requests and get responses from one singular `/graphql` endpoint, whereas in a REST API you might have a variety of urls to access your data. In addition, a lot of times when you try access your data, you get a lot of fluff, GraphQL lets you define what data you want back so you don't have anything unecessary there.

## How to use GraphQL in Gatsby v2.0
Gatsby and several plugins use GraphQL to query for data, and build pages from data. It's pretty straight-forwards, within your React component you do the below:
```js
import React from 'react'
import { graphql, useStateQuery } from 'gatsby'

const myThing = () => {
  const MyData = useStateQuery( graphql`
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

## How to use GraphQL in Gatsby v1.0
NOTE THIS IS FOR VERSION 1.0 OF GATSBY **NOT** VERSION 2.*
Gatsby and several plugins use GraphQL to query for data, and build pages from data. It's pretty straight-forwards, within your React component you do the below:
```js
import React from 'react'
import { graphql } from 'gatsby'

const myThing = () => {
  const MyData = doStuff(query)
  return (
    <div>
      { MyData }
    </div>
  )
}
export const query = graphql`
  query MyQuer {
    allFiles {
      edges {
        node {
          id
        }
      }
    }
  }
`
```