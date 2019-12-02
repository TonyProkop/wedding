import React from "react"
import styles from "./rsvp.module.scss"

const RSVP = () => (
  <div className={styles.rsvpSection}>
    <div className={styles.pageWidth}>
      <div className={styles.spacer} />
      <div className={styles.rsvpContainer}>
        <h3>Join Us</h3>
        <form
          name="rsvp"
          method="POST"
          className={styles.rsvpForm}
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <input
            className={styles.rsvpInput}
            type="text"
            name="fullName"
            placeholder="Full Name"
            required="true"
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
            <input
              className={styles.rsvpInput}
              type="checkbox"
              name="plusOne"
            />
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
          <input name="bot-field" className={styles.honeypot} />
          <input type="submit" className={styles.button} value="SUBMIT" />
        </form>
      </div>
    </div>
  </div>
)

export default RSVP
