import React, { Fragment } from "react"
import bannerLogo from "../images/banner.jpg"
import styles from "./banner.module.scss"

const Banner = () => (
    <Fragment>
        {/* <img src="http://sweetinz.agr8ho5txjpwv.maxcdn-edge.com/wp-content/uploads/2018/05/intro-slider_01.png" alt="Tony and Katie" /> */}
        <img src={bannerLogo} className={styles.bannerLogo} alt="Tony & Katie" />
        <h2>We're Engaged!</h2>
        <h4>Tying the knot May 16, 2020.</h4>
    </Fragment>
)

export default Banner