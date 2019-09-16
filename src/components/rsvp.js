import React from "react"
import styles from "./rsvp.module.scss"

const RSVP = () => (
  <div className={styles.rsvpSection}>
    <div className={styles.rsvpContainer}>
      <h3>Join Us</h3>
      <form
        name="rsvp"
        method="POST"
        className={styles.rsvpForm}
        data-netlify="true"
      >
        <input
          className={styles.rsvpInput}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          className={styles.rsvpInput}
          type="text"
          name="email"
          placeholder="Email Address"
          required="true"
        />
        <br />
        <label>
          <input className={styles.rsvpInput} type="checkbox" name="plusOne" />
          I'm bringing a plus one
        </label>
        <br />
        <textarea
          className={styles.rsvpInput}
          type="text"
          placeholder="Message"
          name="message"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
)

export default RSVP
