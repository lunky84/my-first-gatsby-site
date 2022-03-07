import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Seo 
        title="Home"
        description="The home page meta description"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Lemons on a chopping board"
        src="../images/marcel-l-PQewPJqNKwQ-unsplash.jpg"
      />
    </Layout>
  )
}

export default IndexPage