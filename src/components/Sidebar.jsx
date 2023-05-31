import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
