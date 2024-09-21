import React from 'react';
import { FaWindows, FaApple, FaLinux  } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";


function Features() {
    return (
        <>
            <div className="px-6 md:px-25 lg:px-48 text-justify bg-gray-100 flex flex-col gap-3">
                <div className=" text-[#4a4848]">
                    YouTube is the largest video-sharing platform globally, offering users an exceptional experience for uploading, viewing, and sharing videos. However, it doesn't allow users to download videos directly. That's where Tubeify comes in to assist you!
                </div>
                <div className=" text-center">
                    <h1 className='text-lg font-bold text-[#7b7878] pb-3'>Tubeify Supported Platforms</h1>
                    <div className='flex flex-wrap justify-center text-[150px] text-slate-900'>
                        <FaWindows/>
                        <FaApple/>
                        <DiAndroid/>
                        <FaLinux/>
                    </div>
                </div>
                <div className="text-[#4a4848] pb-4">
                    Discover unlimited video download possibilities with Tubeify, the leading solution for bypassing YouTube's download limitations. Tubeify effectively fills the void left by native download features, delivering a fast, secure, and user-friendly method to simplify and optimize your video downloading experience.
                </div>
            </div>
        </>
    )
}

export default Features