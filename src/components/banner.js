import React from "react"
import styles from "./banner.module.scss"

const Banner = () => (
    <div className={styles.bannerContainer}>
        <div className={styles.bannerText}>
            <div>The Wedding Celebration of</div>
            <h1>Tony & Katie</h1>
        </div>
    </div>
)

export default Banner