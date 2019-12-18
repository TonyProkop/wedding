import React, { useState, useCallback, Fragment } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import tall0 from "../images/gallery/tall_000.jpg"
import tall1 from "../images/gallery/tall_001.jpg"
import tall2 from "../images/gallery/tall_002.jpg"
import tall3 from "../images/gallery/tall_003.jpg"
import tall4 from "../images/gallery/tall_004.jpg"
import tall5 from "../images/gallery/tall_005.jpg"
import tall6 from "../images/gallery/tall_006.jpg"
import tall7 from "../images/gallery/tall_007.jpg"
import tall8 from "../images/gallery/tall_008.jpg"
import tall9 from "../images/gallery/tall_009.jpg"

import wide0 from "../images/gallery/wide_000.jpg"
import wide1 from "../images/gallery/wide_001.jpg"
import wide2 from "../images/gallery/wide_002.jpg"
import wide3 from "../images/gallery/wide_003.jpg"
import wide4 from "../images/gallery/wide_004.jpg"
import wide5 from "../images/gallery/wide_005.jpg"
import wide6 from "../images/gallery/wide_006.jpg"
import wide7 from "../images/gallery/wide_007.jpg"
import wide8 from "../images/gallery/wide_008.jpg"
import wide9 from "../images/gallery/wide_009.jpg"

const images = [
  { src: tall7, width: 467, height: 700 },
  { src: tall8, width: 467, height: 700 },
  { src: tall0, width: 467, height: 700 },
  { src: tall1, width: 467, height: 700 },
  { src: tall2, width: 467, height: 700 },
  { src: tall3, width: 467, height: 700 },
  { src: tall4, width: 467, height: 700 },
  { src: tall5, width: 467, height: 700 },
  { src: tall6, width: 467, height: 700 },
  { src: tall9, width: 467, height: 700 },
  { src: wide0, width: 1400, height: 933 },
  { src: wide1, width: 1400, height: 933 },
  { src: wide2, width: 1400, height: 933 },
  { src: wide3, width: 1400, height: 933 },
  { src: wide4, width: 1400, height: 933 },
  { src: wide5, width: 1400, height: 933 },
  { src: wide6, width: 1400, height: 933 },
  { src: wide7, width: 1400, height: 933 },
  { src: wide8, width: 1400, height: 933 },
  { src: wide9, width: 1400, height: 933 },
]

// import one from "../images/katie_and_me/1.jpg"
// import two from "../images/katie_and_me/2.jpg"
// import three from "../images/katie_and_me/3.jpg"
// import four from "../images/katie_and_me/4.jpg"
// import five from "../images/katie_and_me/5.jpg"
// import six from "../images/katie_and_me/6.jpg"
// import eight from "../images/katie_and_me/8.jpg"
// import nine from "../images/katie_and_me/9.jpg"
// import ten from "../images/katie_and_me/10.jpg"

// const images = [
//   { src: eight, width: 1440, height: 1920 },
//   { src: nine, width: 640, height: 1317 },
//   { src: ten, width: 640, height: 1317 },
//   { src: one, width: 1440, height: 1920 },
//   { src: two, width: 206, height: 274 },
//   { src: three, width: 719, height: 723 },
//   { src: four, width: 1242, height: 933 },
//   { src: five, width: 1440, height: 1920 },
//   { src: six, width: 988, height: 1920 },
// ]

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
      <Gallery photos={images} onClick={openLightbox} targetRowHeight={"400"} />
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
