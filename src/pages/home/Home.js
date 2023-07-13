import React from 'react'
import two from "../../images/pexels-tranmautritam-69432.jpg"
import Header from '../../components/header/Header'
import './home.scss'
import data from "../../data/home.json"
// import AboutIntro from '../../components/Intro/Aboutintro'

const Home = () => {

  return (
    <>
      <Header />
      <div className="home-container">
        <h3 style={{ textAlign: 'center', padding: '5px', fontSize: '32px', fontFamily: 'monospace', textDecoration: 'underline',paddingTop:"30px" }}>
          Introduction
        </h3>
        <div className="intro-section">

          <div className="left">
            <img src={two} alt="" />
          </div>
          <div className="right">
            <h2>Welcome to my portfolio website!</h2>
            {
              data.map((item, i) => {
                return (
                  <div key={i}>
                    <p>{item.introduction}</p><br />
                  </div>
                )
              })
            }
            <p>
              {/* I am thrilled to introduce myself as a passionate and dedicatd website developer,
              specializing in creating stunnuing and functional website. If you are a fresh talent
              looking to make your mark in the word of website developement, you have come to the 
              right place. with a keen eye for design, a love for coding, and a commitment to 
              delivering high quality result,I am eager to showcase me skills and experties. */}

            </p>
          </div>
        </div>
      </div>
            
          <div className="patern">
            <div className="box"></div>
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box1"></div>
            <div className="box"></div>
          </div>

      {/* <AboutIntro /> */}
    </>
  )
}

export default Home