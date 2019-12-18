import React from "react"
import styles from "./rsvp.module.scss"

const RSVP = () => {
  return (
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
            <label className={styles.numbGuestsSelect}>
              Number of Guests
              <select required="required" name="numberOfGuests">
                <option value="0">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
              </select>
            </label>
            <br />
            <textarea
              className={styles.rsvpInput}
              type="text"
              placeholder="Message"
              name="message"
            />
            <label>
              <input className={styles.rsvpInput} type="checkbox" />I can't make
              it
            </label>
            <br />
            <input name="bot-field" className={styles.honeypot} />
            <input type="submit" className={styles.button} value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default RSVP
