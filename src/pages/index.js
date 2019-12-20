import React, { useEffect, Suspense } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/pageSection"
import Banner from "../components/banner"
import WeddingEvents from "../components/weddingEvents"
import Registry from "../components/registry"
import RSVP from "../components/rsvp"
import Countdown from "../components/countdown"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tony & Katie's Wedding" />
      <Banner />
      <PageSection id="weddingEvents">
        <WeddingEvents />
      </PageSection>
      <PageSection id="registry">
        <Registry />
      </PageSection>
      <PageSection id="photos">
        <Suspense fallback={<div></div>}>
          <Photos />
        </Suspense>
      </PageSection>
      <PageSection id="countdown">
        <Countdown />
      </PageSection>
      <PageSection id="rsvp">
        <RSVP />
      </PageSection>
    </Layout>
  )
}

const Photos = React.lazy(() => import("../components/photos"))

export default IndexPage
