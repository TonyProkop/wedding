import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./covid.module.scss"

const Covid = ({ showCovidModal, setShowCovidModal }) => {
	return (
		<div>
			<li onClick={() => setShowCovidModal(!showCovidModal)}>COVID-19</li>
			<div className={showCovidModal ? `${styles.covidModalContainer} ${styles.showCovidModal}` : `${styles.covidModalContainer}`}>
				<div className={styles.modal}>
					<div className={styles.modalGuts}>
						<FontAwesomeIcon
							icon="times"
							className={styles.closeMenu}
							onClick={() => setShowCovidModal(!showCovidModal)}
						/>
						<h1>COVID-19</h1>
						<p>What we're doing to stop the spread:</p>
						<ul className={styles.precautionList}>
							<li>Masks available</li>
							<li>Hand sanitizer provided</li>
							<li>Color coded wrist bands for social distance preference</li>
							<li>Must pass thermometer test to enter reception</li>
						</ul>
					</div>
				</div>
				<div className={styles.modalOverlay} onClick={() => setShowCovidModal(!showCovidModal)}></div>
			</div>
		</div>
	);
}

export default Covid