import React, { useEffect } from 'react'
import './education.scss'
import Image from '../../images/Coding-workshop.png'
import AOS from 'aos'
import "aos/dist/aos.css"

const Education = ({value}) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <>
            <div className={value === 1 ? "education-container" :"hideEducation"}  >
                <div className="left-side" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={Image} alt="" />
                </div>
                <div className="right-side" >
                    <div className="education-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="education-title">
                            React Js Traning
                        </div>
                        <div className="collage-name">
                            Ducat Noida Uttar Pradesh
                        </div>
                        <div className="description">
                            <p>i have done 6 Month Traning in react js </p>
                        </div>
                    </div>

                    <div className="education-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="education-title">
                            MCA (Master Of Computer Application)
                        </div>
                        <div className="collage-name">
                            Mahatama Gandhi Kashi Vidyapeeth Varanasi Uttar Pradesh
                        </div>
                        <div className="session">
                            2014 - 2017
                        </div>
                    </div>

                    <div className="education-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="education-title">
                            BCA (Bachelor's Of Computer Application)
                        </div>
                        <div className="collage-name">
                            Chatrapati Sahu Ji Maharaj Kanpur Uttra Pradesh
                        </div>
                        <div className="session">
                            2011 - 2013
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education