import React, { useState, useEffect } from "react"
import { weddingDate } from "./shared"
import styles from "./countdown.module.scss"

const Countdown = () => {
  // https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
  console.log("rendered countdown")

  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    let interval = setInterval(() => setNow(Date.now()), 1000)

    return function cleanup() {
      clearInterval(interval)
    }
  })

  let delta = Math.abs(weddingDate - now) / 1000

  const days = Math.floor(delta / 86400)
  delta -= days * 86400

  const hours = Math.floor(delta / 3600) % 24
  delta -= hours * 3600

  const minutes = Math.floor(delta / 60) % 60
  delta -= minutes * 60

  const seconds = Math.floor(delta % 60)

  return (
    <div className={styles.container}>
      {/* <h3 className={styles.weddingDate}>May 2nd, 2020</h3>
      <div className={styles.countdown}>
        <div className={styles.timeblock}>
          <div className={styles.number}>{days}</div>
          <div className={styles.label}>Days</div>
        </div>
        <div className={styles.timeblock}>
          <div className={styles.number}>{hours}</div>
          <div className={styles.label}>Hours</div>
        </div>
        <div className={styles.timeblock}>
          <div className={styles.number}>{minutes}</div>
          <div className={styles.label}>Mins</div>
        </div>
        <div className={styles.timeblock}>
          <div className={styles.number}>{seconds}</div>
          <div className={styles.label}>Secs</div>
        </div>
      </div> */}
    </div>
  )
}

export default Countdown
