import React, { useState, useEffect } from "react"
import Loader from "./components/landing/Loader"
import Home from "./components/home/Home"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3150)
  }, [])

  return (
    <div>
      { loading ? (
        <Loader />
      ) : (
        <Home />
      )}
    </div>
  )
}

export default App
