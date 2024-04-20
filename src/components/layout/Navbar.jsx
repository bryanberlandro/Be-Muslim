/* eslint-disable react/prop-types */
import { FaBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Logo } from "../elements/Logo";
import { Link } from "react-router-dom";

export const Navbar = ({display}) => {
    const [showSidebar, setShowSidebar] = useState(false);

    function handleShowSidebar(){
        setShowSidebar(!showSidebar);
    }

    return(
        <>
        <header className={`bg-white w-full z-[999] border-b-2 px-[5%] fixed py-5 ${display ? display : "flex"} justify-between md:px-[7%] xl:py-4 xl:px-[5%]`}>
            <div className="w-full xl:max-w-7xl flex justify-between xl:mx-auto">
                <Logo/>
                <ul className="hidden xl:flex xl:gap-20 xl:text-sm xl:font-medium">
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5 xl:py-1 xl:w-max xl:text-emerald-800">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5 xl:py-1 xl:w-max">
                        <Link to={'/'}>Read Quran</Link>
                    </li>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5 xl:py-1 xl:w-max">
                        <Link to={'/'}>Hadith</Link>
                    </li>
                    <li className="w-full py-4 hover:bg-emerald-50 px-4 rounded-md md:py-5 xl:py-1 xl:w-max">
                        <Link to={'/'}>Quiz</Link>
                    </li>
                </ul>
                <div className="flex gap-5 text-lg items-center md:text-xl md:gap-6">
                    <div className="relative">
                    <FaBell className="cursor-pointer"/>
                    <span className="absolute top-0 right-0 bg-emerald-300 rounded-full w-2 h-2"></span>
                    </div>
                    <IoMenu onClick={handleShowSidebar} className="flex xl:hidden"/>
                </div>
            </div>
        </header>
        <Sidebar showSidebar={showSidebar}/>
        </>
    )
}