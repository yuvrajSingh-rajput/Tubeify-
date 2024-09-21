import React from 'react'
import { ImDownload } from "react-icons/im";
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between px-9 sm:px-9 md:px-16 lg:px-40 py-3 bg-gray-900 shadow-lg">
                <div className="flex items-center text-3xl gap-2">
                    <span className='text-pink-500'>
                        <ImDownload />
                    </span>
                    <h1 className="font-bold text-white">Tubeify</h1>
                </div>
                <div className="flex items-center text-xl gap-2 text-white cursor-pointer">
                    <span className="text-gray-400">
                        <GrLanguage />
                    </span>
                    <h1 className="font-semibold">EN</h1>
                    <span className="text-gray-400">
                        <FaChevronDown />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar;
