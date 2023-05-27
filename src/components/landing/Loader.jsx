import React, { useEffect, useState } from 'react'
import "./Loader.css"
import "../../components/Animations.css"

export default function Loader({ setLoading }) {
  const [welcomeMessage, setWelcomeMessage] = useState("")

  useEffect(() => {
    const message = "welcome"

    const intervalId = setInterval(() => {
      setWelcomeMessage(prevLetter => {
        const currentIndex = prevLetter.length
        const nextLetter = message[currentIndex]
        return prevLetter + nextLetter
      })
    }, 400)

    // interval clean up on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="centered loader">{welcomeMessage}</div>
  )
}
