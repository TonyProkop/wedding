import PropTypes from "prop-types"
import React, { useState, useEffect, Fragment } from "react"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  try {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
    const [menuActive, setMenuActive] = useState(false)

    const scrollIntoViewAndCloseMenu = id => {
      scrollIntoView(id)
      setMenuActive(false)
    }

    useEffect(() => {
      window.addEventListener("resize", function() {
        if (window.innerWidth < 700) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      })
    }, [])

    let menu = (
      <ul className={styles.headerMenu}>
        {/* <li onClick={() => scrollIntoView("story")}>Our Story</li> */}
        <li onClick={() => scrollIntoView("weddingEvents")}>Wedding Details</li>
        <li onClick={() => scrollIntoView("photos")}>Photos</li>
        <li onClick={() => scrollIntoView("registry")}>Registry</li>
        <li onClick={() => scrollIntoView("rsvp")} className={styles.rsvp}>
          RSVP
        </li>
      </ul>
    )

    if (isMobile) {
      if (menuActive) {
        menu = (
          <Fragment>
            <div>
              <FontAwesomeIcon
                icon="times"
                className={styles.closeMenu}
                onClick={() => setMenuActive(!menuActive)}
              />
            </div>

            <ul className={styles.headerMenu}>
              <li onClick={() => scrollIntoViewAndCloseMenu("story")}>
                Our Story
              </li>
              <li onClick={() => scrollIntoViewAndCloseMenu("weddingEvents")}>
                Wedding Details
              </li>
              <li onClick={() => scrollIntoViewAndCloseMenu("photos")}>
                Photos
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
          </Fragment>
        )
      } else {
        menu = (
          <FontAwesomeIcon
            icon="bars"
            onClick={() => setMenuActive(!menuActive)}
          />
        )
      }
    }

    return (
      <header
        className={`${styles.headerContainer} ${
          isMobile ? styles.mobile : false
        } ${menuActive ? styles.active : false}`}
      >
        {menu}
      </header>
    )
  } catch (e) {
    return false
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
