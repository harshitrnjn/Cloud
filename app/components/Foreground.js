import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref = useRef(null)

  const data = [
    {
      text: "While creating any web apps it is advisable to use Admin Panel Template",
      filesize: "8.9mb",
      icon: false,
      tag: { tagcolor: "green", tagtitle: "Download Now!", open: true }
    },
    {
      text: "Nord is an arctic, north-bluish, clean, and elegant theme designed by Arctic Ice Studio.",
      filesize: "41.2mb",
      icon: true,
      tag: { tagcolor: "red", tagtitle: "Download Now!", open: true }
    },
    {
      text: "Different Ways to Display Images in React.js Apps",
      filesize: "55mb",
      icon: true,
      tag: {  open: false , tagcolor: "green", tagtitle: "Download Now!" }
    },
    {
      text: "Different Ways to Display Images in React.js Apps",
      filesize: "46.88mb",
      icon: false,
      tag: {  open: true , tagcolor: "red", tagtitle: "Unable to Download" }
    },
    {
      text: "Different Ways to Display Images in React.js Apps",
      filesize: "55mb",
      icon: true,
      tag: {  open: false , tagcolor: "green", tagtitle: "Download Now!" }
    },
    
  ]

  return (
    <div ref={ref} className='w-full h-full flex gap-5 absolute z-[3] p-4 top-0 left-0 overflow-hidden'>
      {data.map((items, i) => (

        <Card data={items} reference={ref} />

      ))}

    </div>
  )
}

export default Foreground
