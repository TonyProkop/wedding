import React, { Fragment, useState, useEffect } from "react"
import styles from "./carousel.module.scss"

const Carousel = ({ children }) => {
  const [activeChild, setActiveChild] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () =>
        setActiveChild(activeChild =>
          activeChild == children.length - 1 ? 0 : activeChild + 1
        ),
      1000
    )
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(-${activeChild * 100}%`,
        }}
      >
        {children}
      </div>
      <div>
        {children.map((x, i) => {
          return <div onClick={() => setActiveChild(i)}>{i}</div>
        })}
      </div>
    </div>
  )
}

export default Carousel
