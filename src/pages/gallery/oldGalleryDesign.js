import React from 'react'
import { useState, useEffect } from 'react'
import './gallery.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClose } from '@fortawesome/free-solid-svg-icons'

// import img1 from '../../images/project1.jpg'
// import img2 from '../../images/project2.jpg'
// import img3 from '../../images/project3.jpg'
// import img4 from '../../images/project4.jpg'
import AOS from 'aos'
import "aos/dist/aos.css"

const Gallery = () => {
  const [image, setImage] = useState()


  const handleImage = (image) => {
    setImage(image)
  }

  const handleClose = () => {
    setImage("")
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="galleryCotainer" id='gallery'>
      <div className="gallery-cover">  </div>
      <div className='overlay'>
        <div className="galleryTitle" data-aos="fade-up" data-aos-anchor-placement="top-center">
          Project Gallery
        </div>
      </div>

      <div className="galleryCardContainer">
        {image ? <div className='singleImage' onClick={() => handleClose()}>
          <img src={image} alt="item" />
          <div className='closePage'>
            <i>
              <FontAwesomeIcon icon={faClose} />
            </i>
          </div>
        </div>
          : ''}
        <div className="cardItem" onClick={() => handleImage(img1)} data-aos="flip-left" >
          <img src={img1} alt="item" />
        </div>
        <div className="cardItem" onClick={() => handleImage(img2)} data-aos="flip-left" >
          <img src={img2} alt="item" />
        </div>
        <div className="cardItem" onClick={() => handleImage(img3)} data-aos="flip-left" >
          <img src={img3} alt="item" />
        </div>
        <div className="cardItem" onClick={() => handleImage(img4)} data-aos="flip-left">
          <img src={img4} alt="item" />
        </div>
        <div className="cardItem" onClick={() => handleImage(img3)} data-aos="flip-left">
          <img src={img3} alt="item" />
        </div>
        <div className="cardItem" onClick={() => handleImage(img4)} data-aos="flip-left">
          <img src={img4} alt="item" />
        </div>
      </div>

    </div>
  )
}

export default Gallery