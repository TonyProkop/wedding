import React, { Fragment } from "react"
import amazonLogo from "../images/amazon.png"
import menardsLogo from "../images/menards.jpg"
import nfmLogo from "../images/nfm.svg"
import styles from "./registry.module.scss"

const Registry = () => (
  <Fragment>
    <h3>Gift Registry</h3>
    <div className={styles.registryContainer}>
      <StoreLink
        link="https://www.amazon.com/wedding/tony-prokop-katie-johnson-omaha-may-2020/registry/22K5VIT5RA99"
        imageSrc={amazonLogo}
        altText="Amazon Registry"
      />
      <StoreLink
        link="https://www.menards.com/main/registrydetail.html?registryId=103867654&lastName=Johnson"
        imageSrc={menardsLogo}
        altText="Menards Registry"
      />
      <StoreLink
        link="https://registry.nfm.com/Event/Katie-Tony"
        imageSrc={nfmLogo}
        altText="Nebraska Furniture Mart Registry"
      />
    </div>
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
