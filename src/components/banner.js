import React from "react"
import styles from "./banner.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scrollIntoView from "../utils/scrollIntoView"

const Banner = () => (
    <div className={styles.bannerContainer}>
        <div className={styles.bannerText}>
            <div>The Wedding Celebration of</div>
            <h1>Tony & Katie</h1>
        </div>
        <FontAwesomeIcon icon="chevron-down" onClick={() => scrollIntoView("weddingEvents")}></FontAwesomeIcon>
    </div>
)

export default Banner