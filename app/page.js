"use client"
import React, { useState } from 'react'

const page = () => {
  const [username, setUsername] = useState("")
  return (
    <div>
      <h1> Enter your name</h1>
      <form>
        <input type="text" className='border-zinc-800 border-2 px-4 py-2 text-xl' value= {username} onChange={(e) => {
          setUsername(e.target.value)
        }}/> 
      </form>
    </div>
  )
}

export default page
