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
        <div className="intro-section">

          <div className="left">
            <img src={two} alt="" />
          </div>
          <div className="right">
            <h2>Welcome to my portfolio</h2>
            {
              data.map((item, i) => {
                return (
                  <div key={i}>
                    <p>{item.introduction}</p><br />
                  </div>
                )
              })
            }
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
    </>
  )
}

export default Home