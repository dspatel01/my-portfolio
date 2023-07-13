import React from 'react'
import './top.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'


const TopDetails = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="topDetailsContainer" >
                    <div className="leftSide">
                        <div className="emailDetail" >
                        <i style={{color:"black" ,fontSize:"1.2rem"}}>
                                <FontAwesomeIcon icon={faEnvelope} flip />
                            </i>pateldileep290492@gmail.com
                        </div>
                    </div>
                    <div className="rightSide" >
                        <div className="mobileDetails">
                            <i style={{color:"black" ,fontSize:"1.2rem"}}>
                                <FontAwesomeIcon icon={faMobileScreen} shake />
                            </i>
                            <span>+91-</span> 9264954484
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopDetails