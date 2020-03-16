import React, { useState } from "react"
import classnames from "classnames"
import styles from "./rsvp.module.scss"

const RSVP = () => {
  const [cantMakeIt, setCantMakeIt] = useState(false)
  const [numbGuestsUnder21, setNumbGuestsUnder21] = useState("")
  const [numbGuestsOver21, setNumbGuestsOver21] = useState("")

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
              required={true}
            />
            <select
              className={classnames(
                styles.numbGuestsOver21Select,
                cantMakeIt ? styles.hide : ""
              )}
              required={!cantMakeIt}
              name="numberOfGuestsOver21"
              value={numbGuestsOver21}
              onChange={e => setNumbGuestsOver21(e.target.value)}
            >
              <option value=""># of Guests 21+</option>
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
            <select
              className={classnames(
                styles.numbGuestsUnder21Select,
                cantMakeIt ? styles.hide : ""
              )}
              required={!cantMakeIt}
              name="numberOfGuestsUnder21"
              value={numbGuestsUnder21}
              onChange={e => setNumbGuestsUnder21(e.target.value)}
            >
              <option value=""># of Guests under 21</option>
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
            <textarea
              className={styles.rsvpInput}
              type="text"
              placeholder="Message"
              name="message"
            />
            <label>
              <input
                className={styles.rsvpInput}
                type="checkbox"
                name="cantMakeIt"
                onChange={() => {
                  const newCantMakeIt = !cantMakeIt
                  setCantMakeIt(newCantMakeIt)
                  if (newCantMakeIt) {
                    setNumbGuestsUnder21(0)
                    setNumbGuestsOver21(0)
                  } else {
                    setNumbGuestsUnder21("")
                    setNumbGuestsOver21("")
                  }
                }}
              />
              I can't make it
            </label>
            <input name="bot-field" className={styles.honeypot} />
            <input type="submit" className={styles.button} value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default RSVP
