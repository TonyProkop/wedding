import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeddingEvent from "../components/weddingEvent";
import RSVP from "../components/rsvp";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="http://sweetinz.agr8ho5txjpwv.maxcdn-edge.com/wp-content/uploads/2018/05/intro-slider_01.png" />
    <h2>We're Getting Married</h2>
    <h4>24th AUGUST, 2020</h4>
    <h3>Wedding Events</h3>
    <WeddingEvent 
      title="Ceremony"
      locationName="St. James"
      time="Some Time"
      locationUrl="/">
    </WeddingEvent>
    <WeddingEvent 
      title="Reception"
      locationName="Some Venue"
      time="Some Time"
      locationUrl="/">
    </WeddingEvent>
    <h3>Registry</h3>
    <h4>A Few Stores We're Registered With</h4>
    <RSVP />
  </Layout>
)

export default IndexPage
