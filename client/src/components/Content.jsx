import React from 'react'
import Videodata from '../utils/Videodata';
import Tabledata from '../utils/Tabledata';

function Content({url, rawData}) {
    console.log('rawData:', rawData); 

    const { title, thumbnail, duration, formats } = rawData;

    const validFormats = Array.isArray(formats) ? formats : [];

    return (
        <div className='bg-[#ccc5c5] pt-5 text-wrap text-center text-black'>
            <Videodata title={title} thumbnail={thumbnail} duration={duration}/>
            <Tabledata url={url} formats={validFormats}/>
        </div>
    )
}

export default Content;