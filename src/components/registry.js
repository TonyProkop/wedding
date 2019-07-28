import React, { Fragment } from "react"
import amazonLogo from "../images/amazon.png"
import bedBathAndBeyondLogo from "../images/bed-bath-and-beyond.png"
import targetLogo from "../images/target.png"
import bloomingdalesLogo from "../images/bloomingdales.png"
import crateAndBarrel from "../images/crate-and-barrel.jpg"
import styles from "./registry.module.scss"

const Registry = () => (
    <Fragment>
        <h3>Gift Registry</h3>
        <div className={styles.subtitle}>Here's A Few Stores We're Registered With</div>
        <div className={styles.registryContainer}>
            <a href="/">
                <img src={amazonLogo} className={styles.store} alt="Amazon" />
            </a>
            <a href="/">
                <img src={bedBathAndBeyondLogo} className={styles.store} alt="Bed Bath and Beyond" />
            </a>
            <a href="/">
                <img src={targetLogo} className={styles.store} alt="Target" />
            </a>
            <a href="/">
                <img src={bloomingdalesLogo} className={styles.store} alt="Bloomingdales" />
            </a>
            <a href="/">
                <img src={crateAndBarrel} className={styles.store} alt="Crate & Barrel" />
            </a>
        </div>
    </Fragment>
)

export default Registry