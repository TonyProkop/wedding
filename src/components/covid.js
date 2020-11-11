import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./covid.module.scss"

const Covid = () => {
	const [showCovidModal, setShowCovidModal] = useState(false);

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
							<li>Masks are required unless seated at a table</li>
							<li>Tables are 6' apart, max 8 people per table</li>
							<li>Hand sanitizer available</li>
							<li>Dancing must be done in 8 person groups around a table</li>
							<li>Must pass contact-free temperature check before entering reception</li>
							<li>Feel free to reach out for more details if needed!</li>
						</ul>
					</div>
				</div>
				<div className={styles.modalOverlay} onClick={() => setShowCovidModal(!showCovidModal)}></div>
			</div>
		</div>
	);
}

export default Covid