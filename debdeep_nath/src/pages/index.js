import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homeContainer">
      <Image />
      <div className="homeTextContainer">
        <p>Diagnosis, assessment, and medical management for pediatric mental health concerns such as depression, anxiety, autism spectrum disorders, and ADD/ADHD.</p>
        <button><Link to="/about">Learn More</Link></button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
