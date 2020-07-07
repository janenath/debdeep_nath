import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="layoutContainer">
      <Img className="homeImage" fluid={data.homeImage.childImageSharp.fluid} />
      <div className="textContainer">
        <p className="homeText">Diagnosis, assessment, and medical management for pediatric mental health concerns such as depression, anxiety, autism spectrum disorders, and ADD/ADHD.</p>
        <button><Link to="/about">Learn More</Link></button>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query homeQuery {
  homeImage: file(relativePath: { eq: "father_son.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage
