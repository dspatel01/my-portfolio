import React, { useEffect, useState } from 'react'
import './about.scss'
// import Image from '../../images/Coding-workshop.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import Aboutintro from '../../components/Intro/Aboutintro'
import Education from '../../components/education/Education'
import Skills from '../../components/skills/Skills'
import Experience from '../../components/experience/Experience'


const About = () => {
  const [toggleState, setToggleState] = useState(1)

  const handleToggle = (index) => {
    setToggleState(index)
  }

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <>
      <div className="aboutContainer" id='about'>
        <div className="about-cover">
        </div>
        <div className='overlay'>
          <div className="aboutTilte" data-aos="fade-up" data-aos-anchor-placement="top-center"  >
            About Me
          </div>
        </div>
      </div>
      <div className="intro-section" style={{ marginTop: "60px" }}>
        <Aboutintro />        
      </div>
      <div className="category-container">
        <div className="category">
          <ul>
            <li className={toggleState === 1 ? "active" : 'li'} onClick={() => handleToggle(1)}>Education</li>
            <li className={toggleState === 2 ? 'active' : 'li'} onClick={() => handleToggle(2)}>Skills</li>
            <li className={toggleState === 3 ? 'active' : 'li'} onClick={() => handleToggle(3)}>Experience</li>
          </ul>
        </div>
        <div className="education-section" >
          <Education value={toggleState} />
          <Skills value={toggleState} />
          <Experience value={toggleState} />
        </div>
      </div>
    </>
  )
}

export default About