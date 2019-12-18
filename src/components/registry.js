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
    <p>Check back closer to the wedding for links to our gift registry!</p>
    {/* <div className={styles.registryContainer}>
      <StoreLink
        link="https://www.amazon.com/wedding/tony-prokop-katie-johnson-omaha-may-2020/registry/22K5VIT5RA99"
        imageSrc={amazonLogo}
        altText="Amazon Registry"
      />
      <StoreLink
        link="/"
        imageSrc={bedBathAndBeyondLogo}
        altText="Bed Bath and Beyond Registry"
      />
      <StoreLink link="/" imageSrc={targetLogo} altText="Target" />
      <StoreLink
        link="/"
        imageSrc={bloomingdalesLogo}
        altText="Bloomingdales Registry"
      />
      <StoreLink
        link="/"
        imageSrc={crateAndBarrelLogo}
        altText="Crate & Barrel Registry"
      />
      <StoreLink link="/" imageSrc={etsyLogo} altText="Etsy Registry" />
      <StoreLink link="/" imageSrc={jcpennyLogo} altText="JCPenny Registry" />
      <StoreLink link="/" imageSrc={kohlsLogo} altText="Kohl's Registry" />
      <StoreLink link="/" imageSrc={macysLogo} altText="Macy's Registry" />
      <StoreLink
        link="/"
        imageSrc={newlywishLogo}
        altText="Newlywish Registry"
      />
      <StoreLink link="/" imageSrc={reiLogo} altText="REI Registry" />
      <StoreLink link="/" imageSrc={zolaLogo} altText="Zola Registry" />
    </div> */}
  </Fragment>
)

const StoreLink = ({ link, imageSrc, altText }) => (
  <a
    href={link}
    className={styles.store}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={imageSrc} alt={altText} />
  </a>
)

export default Registry
