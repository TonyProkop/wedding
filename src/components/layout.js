import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styles from "./layout.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGlassCheers, faChurch, faGift, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faGlassCheers, faChurch, faGift, faChevronDown, faBars)

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className={styles.pageContainer}>
      <main>{children}</main>
      <footer></footer>
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
