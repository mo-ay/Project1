import React, {Component} from 'react'
import './css/Landing-Page.css'

export default function Landing (){

return (
    <>
    <body>
  
  <div id="particles-js">
<div className="space"></div>
    <div className="landingContainer">
      <div className="leftTab">
        <div className="leftContainer">
          <h1>Indie Bite</h1>
          <div className="parg">
            <p>
              A blog platform focusing on creating blogs and rating about the most interesting intuitive
              indie games found in Itch.io site.
            </p>
          </div>
          <br />

          <a href="./Blogs-Page.html" className="landingButton"><span>Our Blogs</span></a> <br />
          <div className="socialMedia">
            <a href="https://www.facebook.com/Indie-Bite-108163367773449"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/indiebite"><i className="fab fa-instagram"></i> </a></div>
        </div>
      </div>
      <div className="rightTab">
        <img src="./img/indie_bite-01.svg" alt="Indie Bite" className="largeLogo" />
      </div>
    </div>
  </div>

  
  <script src="js/particles.js"></script>
  <script src="js/app.js"></script>
  <script src="https://kit.fontawesome.com/54c2f9ab5e.js" crossOrigin="anonymous"></script>


  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
    <path fill="#ee3568" fillOpacity="1"
      d="M0,256L26.7,256C53.3,256,107,256,160,240C213.3,224,267,192,320,192C373.3,192,427,224,480,213.3C533.3,203,587,149,640,138.7C693.3,128,747,160,800,154.7C853.3,149,907,107,960,101.3C1013.3,96,1067,128,1120,165.3C1173.3,203,1227,245,1280,250.7C1333.3,256,1387,224,1413,208L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
    </path>
  </svg>
</body>
</>
)
}
