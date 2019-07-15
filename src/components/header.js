import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import scrollIntoView from "../utils/scrollIntoView"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header id="header" className={styles.headerContainer}>
      <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
      <ul className={styles.headerMenu}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
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
