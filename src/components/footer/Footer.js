import React from 'react'
import { Link } from "react-router-dom";


import './footer.scss'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItem">

        <div className="footerItem3">
          <div className="footerLogo">
            <h1>DSP</h1>
          </div>
          <div className="companyDescription">
            <p>
              I invite you to explore my protfolio,
              where you will find my Education, Skills and a collection of past Project showcashing my experties in web development.

            </p>
          </div>
        </div>



        <div className="footerItem2">
          <div className="footerTitle">
            Useful Links
          </div>
          <div className="usefulLink">
            <ul> <li className="navItems ">
              <Link to="/"  >Home</Link>
            </li>
              <li className="navItems">
                <Link to='/about'>About</Link>
              </li>
              <li className="navItems">
                <Link to='/service'>Service</Link>
              </li>
              <li className="navItems">
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li className="navItems">
                <Link to='/contact'>Contact</Link>
              </li>

            </ul>
          </div>
        </div>


        <div className="footerItem1">
          <div className="footerTitle">
            Address
          </div>
          <div className="addressContent">
            <p>
              {/* <strong>Permanent Address</strong><br />
              Street :- Sheetal Ganj<br />  Post :- Purwa<br />
              District :- Unnao<br /> State :- UTTAR PRADESH<br />
              <br /> */}
              <strong>Mailing Address</strong><br />
              Noida (UTTAR PRADESH) <br />
              Mobile No :- 9264954484<br />
              pateldileep290492@gmail.com

            </p>
          </div>
        </div>

      </div>
      <div className="copyrightSection">
        <p>All Rights Reserved Copyright © 2022 - 2023 </p>
      </div>

    </div>
  )
}

export default Footer