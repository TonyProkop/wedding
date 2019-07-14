import React from "react"
import bannerLogo from "../images/banner.jpg"
import styles from "./banner.module.scss"

const Banner = () => (
    <div className={styles.bannerContainer}>
        <img src={bannerLogo} className={styles.bannerLogo} alt="Tony & Katie" />
        <div className={styles.bannerText}>
            <div>The Wedding Celebration of</div>
            <h1>Tony & Katie</h1>
        </div>
    </div>
)

export default Banner