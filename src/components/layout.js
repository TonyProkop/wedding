import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styles from "./layout.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGlassCheers,
  faChurch,
  faGift,
  faChevronDown,
  faChevronRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faGlassCheers,
  faChurch,
  faGift,
  faChevronDown,
  faChevronRight,
  faBars,
  faTimes
)

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className={styles.pageContainer}>
      <main>{children}</main>
      <footer />
    </div>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
