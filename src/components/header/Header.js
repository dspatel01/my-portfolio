import React, { useEffect } from 'react';
import './header.scss';
// import pic from '../../images/2-removebg-preview.png'
// import resume from '../../extraFile/dileepspatel-070723.pdf'
// import resume1 from '../../dileepspatel-070723.pdf'
import AOS from 'aos';
import "aos/dist/aos.css";

// const resume_PDF = 'http://localhost:3000/dileepspatel-070723.pdf'


const Header = () => {

// const downloadFileAtUrl = (url) => {
//   const fileName = url.split('/').pop()
//   const aTag = document.createElement('a')
//   aTag.href = url
//   aTag.setAttribute('download',fileName)
//   document.appendChild(aTag)
//   aTag.click()
//   aTag.remove()

// } =


  useEffect(() => {
    AOS.init({
    })
  }, [])

  return (
    <>
      <div className="headerContainer">
        <div className="hero-list">
          <div className="left">
            <h2>Hi' My name is</h2>
            <h1>Dileep patel</h1>
            <p>I am react frontend developer</p>
          </div>
          <div className="right">
            {/* <img src={pic} alt="" /> */}
          </div>
        </div>
      </div>
    </>

  )
}

export default Header