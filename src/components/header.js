import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  let sticky = false
  window.addEventListener("scroll", function(e) {
    sticky = document.documentElement.scrollTop > window.innerHeight
  })

  return (
    <header
      id="header"
      className={`${styles.headerContainer} ${sticky ? "sticky" : false}`}
    >
      <ul className={styles.headerMenu}>
        <li onClick={() => scrollIntoView("story")}>Our Story</li>
        <li onClick={() => scrollIntoView("weddingEvents")}>Wedding Details</li>
        <li onClick={() => scrollIntoView("photos")}>Photos</li>
        <li onClick={() => scrollIntoView("registry")}>Registry</li>
        <li onClick={() => scrollIntoView("rsvp")} className={styles.rsvp}>
          RSVP
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
