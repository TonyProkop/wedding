import React, { Fragment } from "react"
import styles from "./weddingEvents.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WeddingEvents = () => (
    <Fragment>
        <h3>Wedding Events</h3>
        <div className={styles.weddingEventContainer}>
            <WeddingEvent
                icon={<FontAwesomeIcon icon="church"></FontAwesomeIcon>}
                title="Ceremony"
                time="2:00 PM"
                locationName="St. James Church"
                addressLine1="4710 North 90th Street"
                addressLine2="Omaha, NE 68134"
                locationUrl="https://goo.gl/maps/h9atMBpbDPstEwNH6">
            </WeddingEvent>
            <WeddingEvent
                icon={<FontAwesomeIcon icon="glass-cheers"></FontAwesomeIcon>}
                title="Reception"
                time="5:00 PM - 12:00 PM"
                locationName="The Living Room"
                addressLine1="1111 N 13th St"
                addressLine2="Omaha, NE 68102"
                locationUrl="https://goo.gl/maps/nLT3bTtK8NbjD1e78">
            </WeddingEvent>
        </div>
    </Fragment>
)

const WeddingEvent = ({ icon, title, time, locationName, addressLine1, addressLine2, locationUrl }) => (
    <a className={styles.weddingEvent} href={locationUrl} target="_blank" rel="noopener noreferrer">
        {icon}
        <h4>{title}</h4>
        <p className={styles.address}>
            Saturday, 16 May 2020
            <br />
            {time}
            <br />
            <br />
            {locationName}
            <br />
            {addressLine1}
            <br />
            {addressLine2}
            <br />
        </p>
        <div className={styles.seeLocation}>See Location</div>
    </a>
)

export default WeddingEvents