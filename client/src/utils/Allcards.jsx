import React from 'react'
import { CgNotes } from "react-icons/cg";
import { GrLike } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import Card from '../components/Card';
import { BsTools } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GoStack } from "react-icons/go";

function Allcards() {
  return (
    <>
        <div className="px-7 pb-4 bg-gray-100 flex flex-col gap-2 md:gap-7">
            <div className=" md:flex md:justify-center md:gap-7">
                <Card icon={CgNotes} heading={'No Downloads, No Hassles'} text={`With Tubeify, a Youtube video downloader website, everything operates online. Forget about cluttering your device with additional software. download youtube videos fastly and safely from your browser!`} />

                <Card icon={GrLike} heading={'Versatility in Formats'} text={"Whether it's MP4 for video lovers, MP3 for music fans, or other formats, Tubeify supports a variety of file types to meet your specific needs, and our website allows you to download high-quality youtube videos in various resolutions, including HD,1080p, 2k, and even 4k."}/>

                <Card icon={GiReceiveMoney} heading={'Absolutely Free'} text={"Enjoy unlimited YouTube video downloads without spending a dime. Tubeify is committed to providing a safe and cost-free service for all users."}/>
            </div>
            <div className=" md:flex md:justify-center md:gap-7">
                <Card icon={BsTools} heading={'Fastly Downloads'} text={"We know your time is valuable. That's why Tubeify ensures fast and efficient download speeds to get your favorite YouTube videos in no time."}/>

                <Card icon={AiOutlineCloudDownload} heading={'No Sign-up Required'} text={"Jump straight to downloading without the hassle of registration or log-ins. Your ease of access and privacy are our top priorities."}/>

                <Card icon={GoStack} heading={'Cross-Platform Compatibility'} text={"Whether you're on a PC, Mac,windows or android, Tubeify downloads youtube videos seamlessly across all devices. All you need is a web browser to get started."}/>
            </div>
        </div>
    </>
  )
}

export default Allcards