import React, { useState, useEffect } from "react"
import Loader from "./components/landing/Loader"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Navigation from "./components/nav/Navigation"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2360)
  }, [])

  return (
    <div>
      { loading ? (
        <Loader />
      ) : (
        <div className="App">
          <div className="app-content">
          <Navigation />
            <Home />
            <About />
            <Contact />
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  )
}

export default App
