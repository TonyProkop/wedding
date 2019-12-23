import React, { useState, useEffect } from "react"
import classnames from "classnames"
import styles from "./carousel.module.scss"

const Carousel = ({ children, rotateDuration }) => {
  const [activeChild, setActiveChild] = useState(0)

  useEffect(() => {
    if (rotateDuration) {
      const interval = setInterval(
        () =>
          setActiveChild(activeChild =>
            activeChild == children.length - 1 ? 0 : activeChild + 1
          ),
        rotateDuration
      )

      return () => {
        window.clearInterval(interval)
      }
    }
  }, [rotateDuration, activeChild])

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
      <div className={styles.control}>
        {children.map((x, i) => {
          return (
            <div
              className={classnames(
                styles.knob,
                i === activeChild ? styles.active : ""
              )}
              key={i}
              onClick={() => setActiveChild(i)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
