import React, { Fragment } from "react"
import amazonLogo from "../images/amazon.png"
import bedBathAndBeyondLogo from "../images/bed-bath-and-beyond.png"
import targetLogo from "../images/target.png"
import styles from "./registry.module.scss"

const Registry = () => (
    <Fragment>
        <h3>Registry</h3>
        <div className={styles.subtitle}>Here's A Few Stores We're Registered With</div>
        <a href="/">
            <img src={amazonLogo} className={styles.store} alt="Amazon" />
        </a>
        <a href="/">
            <img src={bedBathAndBeyondLogo} className={styles.store} alt="Bed Bath and Beyond" />
        </a>
        <a href="/">
            <img src={targetLogo} className={styles.store} alt="Target" />
        </a>
    </Fragment>
)

export default Registry