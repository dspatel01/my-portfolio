import React, { useEffect } from 'react';
import './header.scss';
import headerPic from '../../images/8401.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";



const Header = () => {


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
            <img src={headerPic} alt="" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Header