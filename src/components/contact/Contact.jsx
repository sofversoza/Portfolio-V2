import React from 'react'
import Form from '../Form'
import { BsGithub, BsLinkedin, BsPaperclip } from "react-icons/bs"
import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact" className="centered contact">
      
      <div className="contact-content">
       
        <div className="contact-title">
          <h2 className="one">Let's</h2>
          <h2 className="two">Get In</h2>
          <h2 className="three">Touch</h2>
        </div>
          
        <div className="form-cont">
          {/* <span className="animate-bounce">Send me a quick message!</span> */}
          <Form />
        </div>

      </div>


      <div className="footer">
        
        <div className="footer-content">
          <div className="social-icons">
            <ul>
              <li>
                <a href='https://github.com/sofversoza' target='_blank'>
                  <BsGithub className='icon' />
                </a>
                <span>Github</span>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/sofiaversoza/' target='_blank'>
                  <BsLinkedin className='icon' />
                </a>
                <span>LinkedIn</span>
              </li>
              <li>
                <a href='' target='_blank'>
                  <BsPaperclip className='icon' />
                </a>
                <span>Resume</span>
              </li>
            </ul>
          </div>

          <div className="copyright">
            <h1><span>©</span>Sofia Versoza — 2023</h1>
          </div>

        </div>
      </div>


    </div>
  )
}
