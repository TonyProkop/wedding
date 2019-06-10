import React, { Fragment } from "react"
import styles from "./weddingEvents.module.scss"
import sharedStyles from "./layout.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WeddingEvents = () => (
    <Fragment>
        <FontAwesomeIcon icon="church" className={sharedStyles.pageSectionHeadingIcon} />
        <h3>Wedding Events</h3>
        <div className={styles.weddingEventContainer}>
            <WeddingEvent
                title="Ceremony"
                time="2:00 PM"
                locationName="St. James Church"
                addressLine1="4710 North 90th Street"
                addressLine2="Omaha, NE 68134"
                locationUrl="https://goo.gl/maps/h9atMBpbDPstEwNH6">
            </WeddingEvent>
            <WeddingEvent
                title="Reception"
                time="5:00 PM - 12:00 PM"
                locationName="Legacy Hall"
                addressLine1="6104 Irvington Rd"
                addressLine2="Omaha, NE 68134"
                locationUrl="https://goo.gl/maps/VpqKUyJeKtRQKeFG6">
            </WeddingEvent>
        </div>
    </Fragment>
)

const WeddingEvent = ({ title, time, locationName, addressLine1, addressLine2, locationUrl }) => (
    <div className={styles.weddingEvent}>
        <h4>{title}</h4>
        <p><b>{time}</b></p>
        <p>
            {locationName}
            <br />
            {addressLine1}
            <br />
            {addressLine2}
            <br />
            <a href={locationUrl} target="_blank" rel="noopener noreferrer">See Location</a>
        </p>
    </div>
)

export default WeddingEvents