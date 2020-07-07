import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({data}) => (
  <Layout>
    <SEO title="about" />
    <div className="layoutContainer">

      <Img className="headshot" fluid={data.headshotImage.childImageSharp.fluid} />
      <div className="textContainer">
        <h2>About Debdeep</h2>
        <p className="bio">Debdeep Nath is a Pediatric Nurse Practitioner in Beaverton, OR, specializing in  diagnosis, assessment and medical management of ASD and common co-occurring physical and mental health conditions. Originally from India, Nath moved to the east coast to pursue his academic and professional training at Yale University. He enjoys exploring the beautiful outdoors of the Pacific Northwest and spending time with his wife and son. Nath joined the board of directors in 2019.</p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query aboutQuery {
  headshotImage: file(relativePath: { eq: "debdeep_headshot.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default About
