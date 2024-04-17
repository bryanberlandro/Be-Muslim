/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export function Sidebar({showSidebar}){
    return(
        <>
        <div 
        className={`fixed top-0 overflow-hidden pl-1 right-0 pt-[80px] bg-gradient-to-t from-emerald-100 via-white to-white w-48 text-neutral-700 h-dvh z-[998] ${showSidebar ? 'translate-x-0' : 'translate-x-96'} transition-all duration-300 md:text-lg md:w- xl:hidden`}>
            <img 
            src="img/pattern.png" 
            alt="" 
            className="absolute grayscale w-full bottom-0  opacity-10 object-cover "/>
            <ul>
                <Link to={`/`}>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5">
                        Home
                    </li>
                </Link>
                <Link to={`/quran`}>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5">
                        Read Quran
                    </li>
                </Link>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5">
                        Hadith
                    </li>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5">
                        Quiz
                    </li>
            </ul>
        </div>
        </>
    )
}