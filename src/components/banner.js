import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
        <div className={styles.weddingCelebrationOf}>
          The Wedding Celebration of
        </div>
        <h1 className={styles.bannerTitle}>
          Tony Prokop <br />& Katie Johnson
        </h1>
        <div>May 2, 2020</div>
      </div>
      <div className={styles.overlay}></div>
      {/* <FontAwesomeIcon
        icon="chevron-down"
        onClick={() => scrollIntoView("story")}
      /> */}
      <Carousel rotateDuration={15000}>
        {data.allFile.nodes.map((x, i) => {
          return (
            <div className={styles.bannerImage} key={x.childImageSharp.id}>
              <Img
                fluid={x.childImageSharp.fluid}
                loading={i === 0 ? "eager" : "lazy"}
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
