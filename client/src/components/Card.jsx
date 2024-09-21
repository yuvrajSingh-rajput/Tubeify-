import React from 'react'
import { CgNotes } from "react-icons/cg";
import { GrLike } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";


function Card({icon: Icon, heading, text, ht}) {
  return (
    <>
        <div  className='flex justify-center '>
            <div className='flex flex-col items-center w-96 shadow-lg rounded-lg border-gray-400 md:w-64'>
                <h1 className='flex justify-center items-center bg-[#EC4899] w-full text-4xl py-3 overflow-hidden text-[#2e2d2d] rounded-t-lg mt-1'><Icon/></h1>
                <h1 className='text-black font-bold text-wrap text-xl px-2'>{heading}</h1>
                <p className='p-3 text-justify leading-8'>{text}</p>
            </div>
        </div>
    </>
  )
}

export default Card;