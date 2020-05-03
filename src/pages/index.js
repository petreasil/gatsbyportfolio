import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Projects from "../components/Home/LatestProject"
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Projects />
  </Layout>
)

export default IndexPage
