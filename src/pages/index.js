import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Featured from "../components/featured";
import Carousel from "../components/Carousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Featured />
    </div>
    <div>
      <div>
        <Carousel title="Last Released" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
