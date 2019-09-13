import PropTypes from "prop-types"
import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" })
  const [menuActive, setMenuActive] = useState(false)

  const scrollIntoViewAndCloseMenu = id => {
    scrollIntoView(id)
    setMenuActive(false)
  }

  if (isDesktop) {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.desktop}`}
      >
        <ul className={styles.headerMenu}>
          <li onClick={() => scrollIntoViewAndCloseMenu("story")}>Our Story</li>
          <li onClick={() => scrollIntoViewAndCloseMenu("photos")}>Photos</li>
          <li onClick={() => scrollIntoViewAndCloseMenu("weddingEvents")}>
            Wedding Details
          </li>
          <li onClick={() => scrollIntoViewAndCloseMenu("registry")}>
            Registry
          </li>
          <li
            onClick={() => scrollIntoViewAndCloseMenu("rsvp")}
            className={styles.rsvp}
          >
            RSVP
          </li>
        </ul>
      </header>
    )
  } else if (menuActive) {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.mobile} ${
          styles.active
        }`}
      >
        <FontAwesomeIcon
          icon="times"
          onClick={() => setMenuActive(!menuActive)}
        />
        <ul className={styles.headerMenu}>
          <li onClick={() => scrollIntoViewAndCloseMenu("story")}>Our Story</li>
          <li onClick={() => scrollIntoViewAndCloseMenu("weddingEvents")}>
            Wedding Details
          </li>
          <li onClick={() => scrollIntoViewAndCloseMenu("photos")}>Photos</li>
          <li onClick={() => scrollIntoViewAndCloseMenu("registry")}>
            Registry
          </li>
          <li
            onClick={() => scrollIntoViewAndCloseMenu("rsvp")}
            className={styles.rsvp}
          >
            RSVP
          </li>
        </ul>
      </header>
    )
  } else {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.mobile}`}
      >
        <FontAwesomeIcon
          icon="bars"
          onClick={() => setMenuActive(!menuActive)}
        />
      </header>
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
