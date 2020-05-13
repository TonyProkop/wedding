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
		url="https://goo.gl/maps/h9atMBpbDPstEwNH6"
		linkText="See Location"
      >
        Saturday, 21 November 2020
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
		url="https://goo.gl/maps/nLT3bTtK8NbjD1e78"
		linkText="See Location"
      >
        Saturday, 21 November 2020
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
		url="https://secure3.hilton.com/en_US/hp/reservation/book.htm?inputModule=HOTEL&ctyhocn=OMADNHX&spec_plan=CHHJOW&arrival=20201120&departure=20201122&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
		linkText="Book Now"
      >
		We have a block of rooms a 4 minute walk from the reception.
		<br />
		<br />
		Hampton Inn & Suites Omaha-Downtown
		<br />
		1212 Cuming St
		<br />
		Omaha, NE 68102
		<br />
      </WeddingEvent>
    </div>
  </Fragment>
)

const WeddingEvent = ({ children, icon, title, url, linkText }) => (
  <a
    className={`${styles.weddingEvent} card`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <h4>{title}</h4>
    <p className={styles.address}>{children}</p>
    {url ? (
      <div className={styles.seeLocation}>
        {linkText}
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    ) : (
      false
    )}
  </a>
)

export default WeddingEvents
