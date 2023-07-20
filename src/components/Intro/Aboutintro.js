import React from 'react'
import aboutImage from '../../images/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import './intro.scss'
const resume_PDF = 'dileepspatel-070723.pdf'


const Aboutintro = () => {
    return (
        <>
            <div className="contentContainer">
                <div className="image">
                    <img src={aboutImage} alt="" />
                </div>

                <div className="textContent" data-aos="fade-right">
                    <h2>
                        I have command of HTML, CSS, JavaScript and React js, which allows
                        me to create visually appealing and interactive user interface. I stay up
                        to date with the latest trends and best practices in front-end development
                        to ensure that my website are modern, responsive. and user-friendly.
                    </h2>
                    <h2>
                        In today's mobile-driven word, it is essencial for websites to be responsive and accessible across devices
                        and screen size. I prioritize responsive design prienciples to ensure that the websites i create look and function
                        flawlessly on desktop,tablets, and smartphone.
                    </h2>
                    <h2>
                        {/* I am proficient in back-end technology in node js, enabling me to build roubust and
                        wesites.I have experience working with databasees. implementing user authentication system, and integration
                        APIs tp enhance the functionality of web application. */}

                        <a href={resume_PDF} download={'dilep-patel_Resume'}>
                            <button>
                                Download Resume
                                <i style={{paddingLeft:"10px", fontSize:"18px"}}>
                                <FontAwesomeIcon icon={faDownload} beat />
                                </i>
                            </button></a>
                    </h2>
                </div>

            </div>
        </>
    )
}

export default Aboutintro
