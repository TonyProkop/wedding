import React from "react"
import { Link } from "gatsby"

const WeddingEvent = ({title, locationName, time, locationUrl}) => (
    <div>
        <h4>{title}</h4>
        <p>{locationName}</p>
        <p>{time}</p>
        <p>
            <Link to={locationUrl}>See Location</Link>
        </p>
    </div>
)

export default WeddingEvent