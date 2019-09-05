import React, { Fragment } from "react"
import amazonLogo from "../images/amazon.png"
import bedBathAndBeyondLogo from "../images/bed-bath-and-beyond.png"
import targetLogo from "../images/target.png"
import bloomingdalesLogo from "../images/bloomingdales.png"
import crateAndBarrelLogo from "../images/crate-and-barrel.png"
import etsyLogo from "../images/etsy.png"
import jcpennyLogo from "../images/jcpenny.png"
import kohlsLogo from "../images/kohls.png"
import macysLogo from "../images/macys.png"
import newlywishLogo from "../images/newlywish.png"
import reiLogo from "../images/rei.png"
import zolaLogo from "../images/zola.png"
import styles from "./registry.module.scss"

const Registry = () => (
  <Fragment>
    <h3>Gift Registry</h3>
    <div className={styles.subtitle}>
      Here's A Few Stores We're Registered With
    </div>
    <div className={styles.registryContainer}>
      <StoreLink link="/" imageSrc={amazonLogo} altText="Amazon" />
      <StoreLink
        link="/"
        imageSrc={bedBathAndBeyondLogo}
        altText="Bed Bath and Beyond"
      />
      <StoreLink link="/" imageSrc={targetLogo} altText="Target" />
      <StoreLink
        link="/"
        imageSrc={bloomingdalesLogo}
        altText="Bloomingdales"
      />
      <StoreLink
        link="/"
        imageSrc={crateAndBarrelLogo}
        altText="Crate & Barrel"
      />
      <StoreLink link="/" imageSrc={etsyLogo} altText="Etsy" />
      <StoreLink link="/" imageSrc={jcpennyLogo} altText="JCPenny" />
      <StoreLink link="/" imageSrc={kohlsLogo} altText="Kohl's" />
      <StoreLink link="/" imageSrc={macysLogo} altText="Macy's" />
      <StoreLink link="/" imageSrc={newlywishLogo} altText="Newlywish" />
      <StoreLink link="/" imageSrc={reiLogo} altText="REI" />
      <StoreLink link="/" imageSrc={zolaLogo} altText="Zola" />
    </div>
  </Fragment>
)

const StoreLink = ({ link, imageSrc, altText }) => (
  <a href={link} className={styles.store}>
    <img src={imageSrc} alt={altText} />
  </a>
)

export default Registry
