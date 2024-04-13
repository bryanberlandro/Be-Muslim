import { FaBell, FaMosque } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    function handleShowSidebar(){
        setShowSidebar(!showSidebar);
    }

    return(
        <>
        <header className="bg-white w-full z-[999] border-b-2 px-[5%] fixed py-5 flex justify-between">
            <div className="font-bold text-lg text-emerald-500 flex items-center gap-2">
                <FaMosque/>
                <h1 className="font-marcellus">
                    Be Muslim
                </h1>
            </div>
            <div className="flex gap-5 text-lg items-center">
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