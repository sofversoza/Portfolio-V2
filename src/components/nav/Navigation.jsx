import React from 'react'
import "./Navigation.css"

export default function Navigation() {
  return (
    <div id="main" className="nav">

      <div className="social-links">
        <ul>
          <li>
            <a href="http://www.linkedin.com/in/sofiaversoza/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="http://github.com/sofversoza" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Medium
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
