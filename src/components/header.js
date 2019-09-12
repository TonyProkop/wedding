import PropTypes from "prop-types"
import React, { useState, useEffect, Fragment } from "react"
import { useMediaQuery } from "react-responsive"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" })

  const [isBelowFold, setIsBelowFold] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBelowFold(
        document.documentElement.scrollTop > window.innerHeight / 2
      )
    })
  })

  if (isDesktop) {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.desktop} ${
          isBelowFold ? styles.fixed : false
        }`}
      >
        <DesktopMenu />
      </header>
    )
  } else {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.mobile}`}
      >
        <MobileMenu />
      </header>
    )
  }
}

const DesktopMenu = () => (
  <ul className={styles.headerMenu}>
    <li onClick={() => scrollIntoView("story")}>Our Story</li>
    <li onClick={() => scrollIntoView("weddingEvents")}>Wedding Details</li>
    <li onClick={() => scrollIntoView("photos")}>Photos</li>
    <li onClick={() => scrollIntoView("registry")}>Registry</li>
    <li onClick={() => scrollIntoView("rsvp")} className={styles.rsvp}>
      RSVP
    </li>
  </ul>
)

const MobileMenu = () => {
  const [menuActive, setMenuActive] = useState(false)

  if (menuActive) {
    return (
      <Fragment>
        <FontAwesomeIcon
          icon="times"
          onClick={() => setMenuActive(!menuActive)}
        />
        <ul className={styles.headerMenu}>
          <li onClick={() => scrollIntoView("story")}>Our Story</li>
          <li onClick={() => scrollIntoView("weddingEvents")}>
            Wedding Details
          </li>
          <li onClick={() => scrollIntoView("photos")}>Photos</li>
          <li onClick={() => scrollIntoView("registry")}>Registry</li>
          <li onClick={() => scrollIntoView("rsvp")} className={styles.rsvp}>
            RSVP
          </li>
        </ul>
      </Fragment>
    )
  } else {
    return (
      <FontAwesomeIcon icon="bars" onClick={() => setMenuActive(!menuActive)} />
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
