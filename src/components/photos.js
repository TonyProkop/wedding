import React from "react"
import pic from "../images/me_and_katie.jpg"
import styles from "./photos.module.scss"

const Photos = props => (
  <div>
    <h3>Photos</h3>
    <div className={styles.container}>
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
      <img src={pic} />
    </div>
  </div>
)

export default Photos
