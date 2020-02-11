import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Sample Gatsby site via Traversy Media's crash</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
