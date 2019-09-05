import React from "react"
import styles from "./banner.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import scrollIntoView from "../utils/scrollIntoView"

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <div>The Wedding Celebration of</div>
        <h1 className={styles.bannerTitle}>Tony & Katie</h1>
        <div>May 2, 2020</div>
      </div>
      <FontAwesomeIcon
        icon="chevron-down"
        onClick={() => scrollIntoView("story")}
      />
    </div>
  )
}

export default Banner
