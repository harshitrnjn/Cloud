"use client"
import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const page = () => {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 '>

      <Background />
      <Foreground />
    </div>


  )
}

export default page