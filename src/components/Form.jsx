import React from 'react'
import { IoSendSharp } from "react-icons/io5"
import "./Form.css"

export default function Form() {
  return (
    <div className="form">
      <form>
        <input placeholder="Full name" type="text" />
        <input placeholder="Email address" type="email" />
        <textarea placeholder="Send me a message" />
        <button>Send <IoSendSharp className="icon" /></button>
      </form>
    </div>
  )
}
