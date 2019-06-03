import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.headerConatiner}>
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
        <li>
          <Link to="/">
            Wedding Events
          </Link>
        </li>
        <li>
          <Link to="/">
            Registry
          </Link>
        </li>
        <li>
          <Link to="/">
            RSVP
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
