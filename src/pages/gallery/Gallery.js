import React,{useEffect} from 'react'
import data from "../../data/projectInfo.json"
import './gallery.scss'
import img1 from '../../images/project1.jpg'
import AOS from 'aos'
import "aos/dist/aos.css"

const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

const handleSinglePage = () =>{
  alert("sorry page is in development!")
}

  console.log()
  return (
    <div className="galleryCotainer" id='gallery'>
      <div className="gallery-cover">  </div>
      <div className='overlay'>

        <div className="galleryTitle" data-aos="fade-up" data-aos-anchor-placement="top-center"  >
          My Portfolio
        </div>
      </div>

      <div className="project-container">
        {
          data.map((item) => {
            return (
              <div key={item.id}>
                <div className="project-card">
                  <div className="left">
                    {/* <img src={item.ping} alt='' /> */}
                    <img src={img1} alt="" />
                    <div className="img-overlay" onClick={handleSinglePage}>
                    </div>
                    <div className="link">
                      <h4>
                        <a href="/">{item.wlink}</a>
                      </h4>
                    </div>
                  </div>
                  <div className="right">
                    <div><h3>Project name</h3></div>
                    <div className='pwork'>{item.pname} </div>
                    <div><h3>Team</h3></div>
                    <div className='pwork'>{item.team}</div>
                    <div><h3> Responsbilty</h3></div>
                    <div className='pwork'>{item.reponsiblity}</div>
                    <div><h3> Decription</h3></div>
                    <div className='pwork'> {item.pdecription}</div>
                    <div><h3>Github</h3> </div>
                    <div className='pwork'> {item.glink}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default Gallery