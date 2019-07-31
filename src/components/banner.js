import React, { useState, useEffect } from "react"
import styles from "./banner.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Countdown from "./countdown"
import scrollIntoView from "../utils/scrollIntoView"

const Banner = () => {


  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <div className={styles.subhead}>The Wedding Celebration of</div>
        <h1 className={styles.bannerTitle}>Tony & Katie</h1>
        <Countdown />
      </div>
      <FontAwesomeIcon
        icon="chevron-down"
        onClick={() => scrollIntoView("weddingEvents")}
      />
    </div>
  )
}

export default Banner
