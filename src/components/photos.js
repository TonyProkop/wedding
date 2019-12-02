import React, { useState, useCallback, Fragment } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import one from "../images/katie_and_me/1.jpg"
import two from "../images/katie_and_me/2.jpg"
import three from "../images/katie_and_me/3.jpg"
import four from "../images/katie_and_me/4.jpg"
import five from "../images/katie_and_me/5.jpg"
import six from "../images/katie_and_me/6.jpg"
import eight from "../images/katie_and_me/8.jpg"
import nine from "../images/katie_and_me/9.jpg"
import ten from "../images/katie_and_me/10.jpg"

const images = [
  { src: eight, width: 1440, height: 1920 },
  { src: nine, width: 640, height: 1317 },
  { src: ten, width: 640, height: 1317 },
  { src: one, width: 1440, height: 1920 },
  { src: two, width: 206, height: 274 },
  { src: three, width: 719, height: 723 },
  { src: four, width: 1242, height: 933 },
  { src: five, width: 1440, height: 1920 },
  { src: six, width: 988, height: 1920 },
]

// https://codesandbox.io/s/5vn3lvz2n4
const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Fragment>
      <Gallery photos={images} onClick={openLightbox} targetRowHeight={400} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel views={images} currentIndex={currentImage} />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  )
}

export default Photos
