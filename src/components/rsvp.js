import React, { Fragment } from "react";
import styles from "./rsvp.module.scss";

const RSVP = () => (
    <Fragment>
        <h3>Join Us</h3>
        <form>
            <input className={styles.rsvpInput} type="text" placeholder="First Name" />
            <input className={styles.rsvpInput} type="text" placeholder="Last Name" />
            <input className={styles.rsvpInput} type="text" placeholder="Email" />
            <input type="checkbox" /> I'm bringing a plus one
            Anything we should know?
            <input className={styles.rsvpInput} type="textarea" />
            <input type="submit" />
        </form>
    </Fragment>
)

export default RSVP