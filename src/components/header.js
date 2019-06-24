import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = () => {
  const scrollIntoView = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header id="header" className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          <Link to="/">
            Tony & Katie
          </Link>
        </h1>
        <ul className={styles.navBar}>
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
      </div>
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
