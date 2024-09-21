import React from 'react'

function Errorpage({message}) {
    return (
        <div className=' bg-[#da45455a] py-4 text-center text-wrap text-red-600 px-5'>{message}
        </div>
    )
}

export default Errorpage;