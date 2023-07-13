import React, { useEffect } from 'react'
import AOS from 'aos'
import ExperinceData from '../../data/experience.json'
import "aos/dist/aos.css"
import './experience.scss'

const Experience = ({ value }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    // console.log(ExperinceData)
    return (
        <>

            <div className={value === 3 ? "experience-container" : "hideExperience"}>
                <div className="experience-list">
                    {
                        ExperinceData.map((value, index) => {
                            return (
                                <div key={index} className="experience" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                                    <div className="company-name">
                                        <h3>Company : {value.company}</h3>
                                    </div>
                                    <h4>Work timing : {value.time}</h4>
                                    <p> Role : {value.role}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Experience