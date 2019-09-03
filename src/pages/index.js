import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Featured from "../components/featured";
import CardRow from "../components/CardRow";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Featured />
    </div>
    <div style={{ padding: "50px 80px" }}>
      <div style={{ marginBottom: 20 }}>
        <CardRow title="Last Released" />
      </div>
      <div style={{ marginBottom: 20 }}>
        <CardRow title="React Projects" />
      </div>
      <div style={{ marginBottom: 20 }}>
        <CardRow title="Vue Projects" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
