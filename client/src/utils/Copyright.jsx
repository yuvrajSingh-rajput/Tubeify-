import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Copyright() {
  return (
    <>
        <div className='text-center text-wrap py-7 bg-gray-300 text-[#4f4d4d] font-semibold'>
            <h1 className='flex items-center gap-1 justify-center'><span><FaRegCopyright/></span>Copyright - Yuvraj Singh Rajput</h1>
            <h1>Date: 20-09-2024</h1>
        </div>
    </>
  )
}

export default Copyright;