import React, { useState } from 'react'
import './navbar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [active ,setActive] = useState(1)

    const handleToggle = (e) => {
        (!menuToggle) ? setMenuToggle(true) : setMenuToggle(false);    
    }
 const handleActiveMenu = (value) =>{
    setActive(value)
 }

    return (
        <>
            <div className="navbarContainer">
                <div className="logoSection">
                    <Link to="/home" >Dsp</Link>
                    <div className='circule'></div>
                    <div className='circule1'></div>
                </div>
                {/* ----------------------full view--------------------------------------/ */}
                <div className={menuToggle ? "navListMobile" : "navList "}>
                    <ul>
                        <li className={active === 1 ? " active" :"navItems"} onClick={()=>handleActiveMenu(1)}>
                            <Link to="/" onClick={() => setMenuToggle(false)}>Home</Link>
                        </li>
                        <li className={active === 2 ? "active" :"navItems"} onClick={()=>handleActiveMenu(2)}>
                            <Link to='/about' onClick={() => setMenuToggle(false)} >About</Link>
                        </li>
                        <li className={active === 3 ? "active" :"navItems"} onClick={()=>handleActiveMenu(3)}>
                            <Link to='/service' onClick={() => setMenuToggle(false)}>Service</Link>
                        </li>
                        <li className={active === 4 ? "active" :"navItems"} onClick={()=>handleActiveMenu(4)}>
                            <Link to='/gallery' onClick={() => setMenuToggle(false)}>Portfolio</Link>
                        </li>
                        <li className={active === 5 ? "active" :"navItems"} onClick={()=>handleActiveMenu(5)}>
                            <Link to='/contact' onClick={() => setMenuToggle(false)}>Contact</Link>
                        </li>
                    </ul>

                </div>


                {/* /----------------------Mobile Toggle Button ----------------------------------/ */}
                <div className="mobile-Menu">
                    <button onClick={() => handleToggle()}>
                        {
                            menuToggle ? <FontAwesomeIcon icon={faXmark} /> :
                                <FontAwesomeIcon icon={faBars} />
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar