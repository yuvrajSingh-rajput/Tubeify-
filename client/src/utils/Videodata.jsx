import React from 'react'

function Videodata({title, thumbnail, duration}) {
  return (
    <>
        <div className=" flex-col justify-center items-center pb-3">
            <div className=" flex justify-center">
                <img src={thumbnail} alt="video-thumbnail" className=' bg-black scale-110'/>
            </div>
            <h1 className=' text-lg mt-1 font-serif'>{title}</h1>
            <p className=' font-semibold'>Duration: {duration}</p>
        </div>
    </>
  )
}

export default Videodata;