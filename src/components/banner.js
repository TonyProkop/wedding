import React from "react"
import styles from "./banner.module.scss"
import "./banner.scss"
import bannerImage0 from "../images/banner/banner_000.jpg"
import bannerImage1 from "../images/banner/banner_001.jpg"
import bannerImage2 from "../images/banner/banner_002.jpg"
import bannerImage3 from "../images/banner/banner_003.jpg"
import Carousel from "./carousel"

const Banner = ({ showCovidModal, setShowCovidModal }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <div className={styles.weddingCelebrationOf}>
          The Wedding Celebration of
        </div>
        <h1 className={styles.bannerTitle}>
          Tony Prokop <br />& Katie Johnson
        </h1>
        <div>November 21, 2020</div>
		<button className={styles.covidButton} onClick={() => setShowCovidModal(!showCovidModal)}>COVID-19 Update</button>
      </div>
      <div className={styles.overlay}></div>
      <Carousel rotateDuration={15000}>
        <img src={bannerImage0} className={styles.bannerImage} alt="Tony and Katie sitting in field" />
        <img src={bannerImage1} className={styles.bannerImage} alt="Tony and Katie in forest" loading="lazy" />
        <img src={bannerImage2} className={styles.bannerImage} alt="Tony and Katie on a hill" loading="lazy" />
        <img src={bannerImage3} className={styles.bannerImage} alt="Tony and Katie in forest" loading="lazy" />
      </Carousel>
    </div>
  )
}

export default Banner
