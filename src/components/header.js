import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// const EventListeners = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth)
//   const [heightFromTop, setHeightFromTop] = useState(
//     document.documentElement.scrollTop
//   )

//   window.addEventListener("resize", setHeightFromTop(window.innerWidth))
//   window.addEventListener(
//     "scroll",
//     setHeightFromTop(document.documentElement.scrollTop)
//   )

//   return <Header screenWidth={screenWidth} heightFromTop={heightFromTop} />
// }

const Header = () => {
  // let sticky = false
  // window.addEventListener("scroll", function(e) {
  //   sticky = document.documentElement.scrollTop > window.innerHeight
  // })

  if (window.innerWidth > 700) {
    return (
      <header
        id="header"
        className={`${styles.headerContainer} ${styles.desktop}`}
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
