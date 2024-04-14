import { FaBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Logo } from "../elements/Logo";

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    function handleShowSidebar(){
        setShowSidebar(!showSidebar);
    }

    return(
        <>
        <header className="bg-white w-full z-[999] border-b-2 px-[5%] fixed py-5 flex justify-between md:px-[7%]">
            <Logo/>
            <div className="flex gap-5 text-lg items-center md:text-xl md:gap-6">
                <div className="relative">
                <FaBell/>
                <span className="absolute top-0 right-0 bg-emerald-300 rounded-full w-2 h-2"></span>
                </div>
                <IoMenu onClick={handleShowSidebar}/>
            </div>
        </header>
        <Sidebar showSidebar={showSidebar}/>
        </>
    )
}