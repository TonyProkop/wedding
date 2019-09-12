import React from "react"
import styles from "./rsvp.module.scss"

const RSVP = () => (
  <div className={styles.rsvpSection}>
    <div className={styles.rsvpContainer}>
      <h3>Join Us</h3>
      <form name="rsvp" method="POST" className={styles.rsvpForm}>
        <input
          className={styles.rsvpInput}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          className={styles.rsvpInput}
          type="text"
          placeholder="Email Address"
        />
        <br />
        <label>
          <input className={styles.rsvpInput} type="checkbox" />
          I'm bringing a plus one
        </label>
        <br />
        <textarea
          className={styles.rsvpInput}
          type="text"
          placeholder="Message"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
)

export default RSVP
