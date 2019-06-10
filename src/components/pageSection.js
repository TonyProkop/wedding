import React from "react"
import styles from "./pageSection.module.scss"

const PageSection = (props) => (
    <div id={props.id} className={styles.pageSection}>
        {props.children}
    </div>
)

export default PageSection
