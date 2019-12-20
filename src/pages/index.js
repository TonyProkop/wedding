import React, { useEffect } from "react"
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
  useEffect(() => {
    if ("objectFit" in document.documentElement.style === false) {
      document.addEventListener("DOMContentLoaded", function() {
        Array.prototype.forEach.call(
          document.querySelectorAll("img[data-object-fit]"),
          function(image) {
            ;(image.runtimeStyle || image.style).background =
              'url("' +
              image.src +
              '") no-repeat 50%/' +
              (image.currentStyle
                ? image.currentStyle["object-fit"]
                : image.getAttribute("data-object-fit"))

            image.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
              image.width +
              "' height='" +
              image.height +
              "'%3E%3C/svg%3E"
          }
        )
      })
    }
  }, [typeof document])

  return (
    <Layout>
      <SEO title="Tony & Katie's Wedding" />
      <Banner />
      <PageSection id="weddingEvents">
        <WeddingEvents />
      </PageSection>
      <PageSection id="photos">
        <Photos />
      </PageSection>
      <PageSection id="registry">
        <Registry />
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

export default IndexPage
