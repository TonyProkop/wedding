import React, { useState } from "react";
import close from "../images/close.svg";
import styles from "./covid.module.scss"

const Covid = () => {
	const [show, setShow] = useState(Date.now() < new Date(2020, 4, 2));

	return show ? <div className={styles.covid}>
		<img src={close} className={styles.close} onClick={() => setShow(false)} />
		We are rescheduling our wedding due to COVID-19. 
		<br />
		We'll try our best to reach out to everyone individually. 
		<br />
		Check back later for the updated date.
	</div> : false
}

export default Covid;