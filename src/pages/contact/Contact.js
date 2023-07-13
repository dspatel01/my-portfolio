import React, { useState, useEffect } from 'react'
// import emailjs from 'emailjs-com'
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faUser, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import "aos/dist/aos.css"

const Contact = () => {

  const [text, setText] = useState(
    {
      uname: "",
      email: "",
      enqury: ""
    }
  )
  const handletext = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setText((old) => {
      return { ...old, [name]: value }
    })
  }
  const submitForm = (e) => {
    e.preventDefault()
    const { uname, email, enqury } = text;

    alert(`name : ${uname}
    email : ${email}
    enqury : ${enqury}
   `)
 
  }


  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <div className="contactContainer" id='contact'>
        <div className="contact-cover">
        </div>
        <div className='overlay'>
          <div className="contactTitle" data-aos="fade-up" data-aos-anchor-placement="top-center" >
            Contact
          </div>
        </div>

        <div className="mainContainer">
          <div className="contactUsContainer">
            <div className="leftSide" data-aos="slide-right">
              <i>
                <FontAwesomeIcon icon={faContactCard} />
              </i>

            </div>
            <form className="rightSide" onSubmit={submitForm} data-aos="fade-left">
              <div className="contactInputPageContainer">
                <div className="inputField">
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                  <input type="text"
                    placeholder='Enter Your Full Name'
                    name="uname"
                    value={text.uname}
                    onChange={handletext}
                    required />
                </div>
                {/* <div className="inputField">
                  <i>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </i>
                  <input type="text"
                    placeholder='Enter Your mobile number'
                    name="mobile"
                    value={text.mobile}
                    onChange={handletext}
                    required />
                </div> */}
                <div className="inputField">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <input type="email"
                    placeholder='Enter Your Email'
                    name="email"
                    value={text.email}
                    onChange={handletext}
                    required
                  />
                </div>
                <div className="inputField textarea">
                  <i>
                    <FontAwesomeIcon icon={faChartBar} />
                  </i>
                  <textarea
                    rows="5"
                    cols="50"
                    name='enqury'
                    value={text.enqury}
                    placeholder='Ask Your Question .....'
                    onChange={handletext}

                  />
                </div>
                <div className="btn">
                  {/* <i>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </i> */}
                  <button type='submit' value='send'> Submit </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact