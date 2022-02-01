import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {


  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Patna, Bihar</p>
          <p>Shakib Jilani</p>
          <p>shakibjilani@gmail.com</p>
          <p> <a href="https://github.com/Shakib40" target="_blank" rel="noreferrer"><span ><FaGithub /> </span></a>  <a href="https://www.linkedin.com/in/shakib-jilani/" target="_blank" rel="norefer"><span> <FaLinkedin /></span> </a> </p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
