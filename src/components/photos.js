import React, { useState, useCallback, Fragment } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import tall0 from "../images/gallery/tall_000.jpg"
import tall2 from "../images/gallery/tall_002.jpg"
import tall3 from "../images/gallery/tall_003.jpg"
import tall4 from "../images/gallery/tall_004.jpg"
import tall5 from "../images/gallery/tall_005.jpg"
import tall6 from "../images/gallery/tall_006.jpg"
import tall7 from "../images/gallery/tall_007.jpg"
import tall9 from "../images/gallery/tall_009.jpg"

import wide0 from "../images/gallery/wide_000.jpg"
import wide3 from "../images/gallery/wide_003.jpg"
import wide4 from "../images/gallery/wide_004.jpg"
import wide5 from "../images/gallery/wide_005.jpg"
import wide6 from "../images/gallery/wide_006.jpg"
import wide7 from "../images/gallery/wide_007.jpg"
import wide8 from "../images/gallery/wide_008.jpg"
import wide9 from "../images/gallery/wide_009.jpg"

const images = [
  { src: tall6, width: 467, height: 700 },
  { src: tall7, width: 467, height: 700 },
  { src: wide0, width: 1400, height: 933 },
  { src: tall0, width: 467, height: 700 },
  { src: wide3, width: 1400, height: 933 },
  { src: wide4, width: 1400, height: 933 },
  { src: tall2, width: 467, height: 700 },
  { src: wide8, width: 1400, height: 933 },
  { src: tall3, width: 467, height: 700 },
  { src: tall4, width: 467, height: 700 },
  { src: wide6, width: 1400, height: 933 },
  { src: wide7, width: 1400, height: 933 },
  { src: wide5, width: 1400, height: 933 },
  { src: wide9, width: 1400, height: 933 },
  { src: tall5, width: 467, height: 700 },
  { src: tall9, width: 467, height: 700 },
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
      <Gallery photos={images} onClick={openLightbox} targetRowHeight={200} />
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
