import React from 'react'
import './aboutMe.css'
import person from '../../images/photo.png'
import { saveAs } from "file-saver";

function AboutMe() {

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1UyvoFNFrsCRIUka9n8wkcPCW4wc_a3XF",
      "resume.pdf"
    );
  };


  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={person} alt="person icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>A passionate Full Web Developer having experience of building web application with JavaScript/Reactjs/Nodejs/ Reduxjs and some other cool libraries and frameworks.I'm still enthusiastically learning more programming languages, frameworks, or principles I can integrate into the coding web in my head.
          Besides coding, I love traveling and meeting new people, playing Cricket or any online game.</p>
        <button onClick={saveFile} className="btn-resume">Download Resume</button>
      </div>
    </div>
  )
}

export default AboutMe
