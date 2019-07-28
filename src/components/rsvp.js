import React from "react";
import styles from "./rsvp.module.scss";

const RSVP = () => (
    <div className={styles.rsvpSection}>
        <h3>Join Us</h3>
        <form className={styles.rsvpForm}>
            <input className={styles.rsvpInput} type="text" placeholder="Full Name" />
            <br />
            <input className={styles.rsvpInput} type="text" placeholder="Email Address" />
            <br />
            <label>
                <input className={styles.rsvpInput} type="checkbox" /> 
                I'm bringing a plus one
            </label>
            <br />
            <textarea className={styles.rsvpInput} type="text" placeholder="Message" />
            <br />
            <input type="submit" />
        </form>
    </div>
)

export default RSVP