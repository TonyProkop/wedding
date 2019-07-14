import React, { Fragment } from "react";

const RSVP = () => (
    <Fragment>
        <h3>Join Us</h3>
        <form>
            <label>
                First Name
                <input type="text" />
            </label>
            <label>
                Last Name
                <input type="text" />
            </label>
            <label>
                Email
                <input type="text" />
            </label>
            <label>
                <input type="checkbox" />
                I'm bringing a plus one
            </label>
            <label>
                Anything we should know?
                <input type="textarea" />
            </label>
            <input type="submit" />
        </form>
    </Fragment>
)

export default RSVP