import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header id="header" className={styles.headerContainer}>
      <FontAwesomeIcon icon="bars" onClick={() => setMenuActive(!menuActive)}></FontAwesomeIcon>
      {
        menuActive 
        ? <ul className={styles.headerMenu}>
          <li onClick={() => scrollIntoView("weddingEvents")}>
            Wedding Events
          </li>
          <li onClick={() => scrollIntoView("registry")}>
            Registry
          </li>
          <li onClick={() => scrollIntoView("rsvp")}>
            RSVP
          </li>
        </ul>
        : false
      }

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
