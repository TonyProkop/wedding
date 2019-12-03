import React from "react"
import styles from "./banner.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollIntoView from "../utils/scrollIntoView"
import Carousel from "./carousel"
import img1 from "../images/katie_and_me/Tony+Katie-18.jpg"
import img2 from "../images/katie_and_me/Tony+Katie-63.jpg"
import img3 from "../images/katie_and_me/Tony+Katie-124.jpg"
import img4 from "../images/katie_and_me/Tony+Katie-174.jpg"

const Banner = () => {
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
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </Carousel>
    </div>
  )
}

export default Banner
