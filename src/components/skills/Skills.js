import React, { useEffect } from 'react'
import './skills.scss'
import AOS from 'aos'
import "aos/dist/aos.css"
import skillData from '../../data/skills.json'


const Skills = ({ value }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <>

            <div className={value === 2 ? "skills-container" : "hideSkill"}>
                <div className="skill-list">
                    {
                        skillData.map((value, index) => {
                            return (
                                <div key={index} className="skills" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                                    <h3>{value.sname}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Skills