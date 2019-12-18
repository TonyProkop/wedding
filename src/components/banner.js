import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./banner.module.scss"
import "./banner.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollIntoView from "../utils/scrollIntoView"
import Carousel from "./carousel"

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "banner" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
            id
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <div>The Wedding Celebration of</div>
        <h1 className={styles.bannerTitle}>Tony & Katie</h1>
        <div>May 2, 2020</div>
      </div>
      {/* <FontAwesomeIcon
        icon="chevron-down"
        onClick={() => scrollIntoView("story")}
      /> */}
      <Carousel rotateDuration={10000}>
        {data.allFile.nodes.map((x, i) => {
          return (
            <div className={styles.bannerImage}>
              <Img
                key={x.childImageSharp.id}
                fluid={x.childImageSharp.fluid}
                loading="eager"
                objectFit="cover"
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Banner
