import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./About.css"

export default function About() {
  return (
    <div id="about" className="centered about">
      <div className="about-content">

        <div className="about-title">
          <h2 className="one">More</h2>
          <h2 className="two">About</h2>
          <h2 className="three">Me</h2>
        </div>

        <div className="details">
          <div className="left">
            <div className="heading">
              <h2>My Story &</h2>
              <h2>Background</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus et! Recusandae quaerat veniam amet numquam rerum, ullam, nostrum error blanditiis sint eaque vel distinctio vero molestiae dolorem officiis animi!</p>
          </div>

          <div className="right">
            <div className="heading">
              <h2>As of</h2>
              <h2>Right now</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, possimus et! Recusandae quaerat veniam amet numquam rerum, ullam, nostrum error blanditiis sint eaque vel distinctio vero molestiae dolorem officiis animi!</p>
          </div>
        </div>

       
        <div className="typed-animation">
          <p>I'm a</p>
          <TypeAnimation
            sequence={[
              // Same String at the start will only be typed once, initially
              'Full Stack Web Developer',
              2000,
              'Web Designer',
              2000,
              'UI/UX Designer',
              2000,
              'Software Engineer',
              2000,
              'Book Worm',
              2000,
              'Creative',
              2000,
              'Cat Mom',
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
            className="typed"
            style={{ wordBreak: 'break-all' }}
          />
        </div>

      </div>
    </div>
  )
}
