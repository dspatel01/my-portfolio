import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import data from "../../data/content.json"
import './service.scss'
import AOS from 'aos'
import "aos/dist/aos.css"


const Service = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])


  return (
    <>

      <div className="serviceContainer" id='service' >
        <div className="service-cover">
        </div>
        <div className='overlay'>
          <div className="serviceTitle" data-aos="fade-up" data-aos-anchor-placement="top-center"  > What i do</div>
        </div>


        <div className="serviceCardContainer">
          <div className="serviceCard">
            <div className="cardItem" data-aos="flip-left" >
              <div className="cardContainer">
                <div className="cardImage">
                  {/* <img src={img1} alt="service1" />  */}
                  <i>
                    <FontAwesomeIcon icon={faLaptop} />
                  </i>
                </div>
              </div>
              <div className="cardContent">
                <h3>Web development</h3>
                {/* <p>Responsivness allow you to use website
                in desktop ,Laptop, Table and also in mobile.
              </p> */}
              </div>
            </div>
            <div className="cardItem" data-aos="flip-left">
              <div className="cardContainer"  >
                <div className="cardImage">
                  {/* <img src={img2} alt="service2" /> */}
                  <i className='cardItem2'>
                    <FontAwesomeIcon icon={faDesktop} />
                  </i>
                </div>
              </div>
              <div className="cardContent">
                <h3>Responsive Frontend-ui develpoment</h3>
                {/* <p>Responsivness allow you to use website
                in desktop ,Laptop, Table and also in mobile.
              </p> */}
              </div>
            </div>
            <div className="cardItem" data-aos="flip-left">
              <div className="cardContainer">
                <div className="cardImage ">
                  {/* <img src={img3} alt="service3" /> */}
                  <i className='cardItem3'>
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </i>
                </div>
              </div>
              <div className="cardContent">
                <h3>Web Application</h3>
                {/* <p>Responsivness allow you to use website
                in desktop ,Laptop, Table and also in mobile.
              </p> */}
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* <h3 style={{marginTop:"20px", textAlign: 'center', padding: '5px', fontSize: '32px', fontFamily: 'monospace', textDecoration: 'underline' }}>
          Kye Feature's
        </h3>
        <div className="service-container">
          {
          data.map((item, i) => {
            return (
              <div key={i}>
                <div className='service-item' data-aos="flip-left"><p>{item.value}</p></div><br />
              </div>
            )
          })
        }
        </div> */}
=======
        // <h3 style={{marginTop:"20px", textAlign: 'center', padding: '5px', fontSize: '32px', fontFamily: 'monospace', textDecoration: 'underline' }}>
        //   Kye Feature's
        // </h3>
        // <div className="service-container">
        //   {
        //   data.map((item, i) => {
        //     return (
        //       <div key={i}>
        //         <div className='service-item' data-aos="flip-left"><p>{item.value}</p></div><br />
        //       </div>
        //     )
        //   })
        // }
        // </div>
>>>>>>> 2a5f7de0049423b97e37793633279bf3700504d6
      
      </div>
    </>
  )
}

export default Service
