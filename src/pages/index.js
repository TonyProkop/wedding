import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/pageSection"
import Banner from "../components/banner"
import WeddingEvents from "../components/weddingEvents"
import Registry from "../components/registry"
import RSVP from "../components/rsvp"
import Countdown from "../components/countdown"
import Photos from "../components/photos"

const IndexPage = () => {
  const [showCovidModal, setShowCovidModal] = useState(false);

  return (
    <Layout showCovidModal={showCovidModal} setShowCovidModal={setShowCovidModal}>
      <SEO title="Tony & Katie's Wedding" />
      <Banner showCovidModal={showCovidModal} setShowCovidModal={setShowCovidModal} />
      <PageSection id="weddingEvents">
        <WeddingEvents />
      </PageSection>
      <PageSection id="registry">
        <Registry />
      </PageSection>
      <PageSection id="photos">
        <Photos />
        <Countdown />
      </PageSection>
      <PageSection id="rsvp">
        <RSVP />
      </PageSection>
    </Layout>
  )
}

export default IndexPage
