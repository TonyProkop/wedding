import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/pageSection"
import Banner from "../components/banner";
import WeddingEvents from "../components/weddingEvents";
import Registry from "../components/registry";
import RSVP from "../components/rsvp";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <PageSection id="weddingEvents">
      <WeddingEvents />
    </PageSection>
    <PageSection id="registry">
      <Registry />
    </PageSection>
    <PageSection id="rsvp">
      <RSVP />
    </PageSection>
  </Layout>
)

export default IndexPage
