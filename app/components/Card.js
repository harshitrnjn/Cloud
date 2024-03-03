import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, useDragControls } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5";

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={1} whileDrag={{scale:1.07}} className='relative rounded-[30px] w-[12vw] h-[15vw] bg-zinc-900/90 p-5 overflow-hidden'>
      <IoDocumentText className='text-lg text-white' />
      <p className='text-white text-sm mt-5'>{data.text}</p>
      <div className='absolute bottom-0 left-0 b w-full'>
        <div name='tag' className='py-3 px-5 text-white w-full flex justify-between items-center '>
          <h3 className='text-[12px]'>{data.filesize}</h3>
          <span className='bg-zinc-700 w-[25px] h-[25px] flex justify-center items-center rounded-full'>
            {data.icon ? <MdOutlineFileDownload /> : <IoCloseSharp />}
          </span>
        </div>
        {data.tag.open&& <div className={` w-full h-[2.8vw] ${"bg-"+data.tag.tagcolor+"-500"} flex  justify-center items-center`}>
          <h3 className='text-[12px] text-white font-semibold'>{data.tag.tagtitle}</h3>
        </div> }
        
      </div>
    </motion.div>
  )
}

export default Card


// 
// ${data.tag.tagcolor === "green" ? "bg-green-500" : "bg-red-600"}