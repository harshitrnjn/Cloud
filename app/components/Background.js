import React from 'react'

const Background = () => {
  return (
    <div className='w-screen h-screen fixed z-[2]'>
    <div className='w-full p-8  flex justify-center absolute top-[4%]  font-semibold text-xl text-zinc-500' >
        Documents
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[12vw] font-semibold leading-none tracking-tighter'>
        Docs.
      </div>
    </div>
  )
}

export default Background
