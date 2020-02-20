import React, { Fragment } from "react"
import styles from "./weddingEvents.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WeddingEvents = () => (
  <Fragment>
    <h3>Wedding Details</h3>
    <div className={styles.weddingEventContainer}>
      <WeddingEvent
        icon={
          <FontAwesomeIcon icon="church" className={styles.eventLocation} />
        }
        title="Ceremony"
        locationUrl="https://goo.gl/maps/h9atMBpbDPstEwNH6"
      >
        Saturday, 2 May 2020
        <br />
        2:00 PM
        <br />
        <br />
        St. James Church
        <br />
        4710 North 90th Street
        <br />
        Omaha, NE 68134
        <br />
      </WeddingEvent>
      <WeddingEvent
        icon={
          <FontAwesomeIcon
            icon="glass-cheers"
            className={styles.eventLocation}
          />
        }
        title="Reception"
        locationUrl="https://goo.gl/maps/nLT3bTtK8NbjD1e78"
      >
        Saturday, 2 May 2020
        <br />
        5:00 PM - 12:00 AM
        <br />
        <br />
        The Living Room
        <br />
        1111 N 13th St
        <br />
        Omaha, NE 68102
        <br />
      </WeddingEvent>
      <WeddingEvent
        icon={<FontAwesomeIcon icon="hotel" className={styles.eventLocation} />}
        title="Accommodation"
      >
		Because of the Berkshire Hathaway event in Omaha, hotels aren't allowing blocks of rooms to be reserved.  
		<br />
		<br />
		If you need a hotel, book one soon.  Don't forget that Airbnb is also an option.
      </WeddingEvent>
    </div>
  </Fragment>
)

const WeddingEvent = ({ children, icon, title, locationUrl }) => (
  <a
    className={`${styles.weddingEvent} card`}
    href={locationUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <h4>{title}</h4>
    <p className={styles.address}>{children}</p>
    {locationUrl ? (
      <div className={styles.seeLocation}>
        See Location
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    ) : (
      false
    )}
  </a>
)

export default WeddingEvents
