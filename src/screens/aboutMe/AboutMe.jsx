import React from 'react'
import './aboutMe.css'
import person from '../../images/photo.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>A passionate Full Web Developer having experience of building web application with JavaScript/Reactjs/Nodejs/ Reduxjs and some other cool libraries and frameworks.</p>
     </div>
    </div>
  )
}

export default AboutMe
