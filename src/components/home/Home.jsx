import React from 'react'
import { RxArrowRight } from "react-icons/rx"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import "./Home.css"
import "../../components/Animations.css"


export default function Home() {
  
  
  return (
    <div className="centered home">

      <div className="name">
        <h1 className="animate-letter-spacing"><span>S</span>ofia</h1>
        <h1 className="animate-letter-spacing"><span>V</span>ersoza</h1>
      </div>

      <div className="welcome-message animate-fade-in">

        <p> 
          <div className="animate-bounce">
            <span className="welcome1">Hello</span><br/> 
          </div>
          <span className="welcome2">I'm Sofia great seeing you here</span><br/>
          I'm a{" "}
          <div className="zoom">
            <span className="highlight">Full Stack Web Developer</span>{" "} 
          </div>{" "}
          who's passionate<br/> about{" "} 
          <div className="zoom">
            <span className="highlight">Front End Web Development</span>{" "}
          </div>
          <span className="amp"> &{" "}</span>
          <div className="zoom">
            <span className="highlight">UI/UX Design</span>
          </div>
        </p>
      </div>


      


      <div className="page-title">
        <div className="horizontal"></div>
        <span>01 home</span>
      </div>
    </div>
  )
}
