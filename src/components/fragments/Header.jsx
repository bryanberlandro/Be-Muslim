/* eslint-disable react/prop-types */
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { Logo } from "../elements/Logo";
import { FaEarthAsia } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";

export function Header({linkTo = "/"}){
    return(
        <>
        <div className="bg-white w-full z-[999] border-b-2 px-[5%] fixed py-5 justify-between md:px-[7%] xl:py-4 xl:px-[5%]">
            <div className="w-full xl:max-w-7xl flex justify-between items-center xl:mx-auto">
                <div className="flex items-center gap-5">
                    <Link to={linkTo}>
                        <FaArrowLeft className="text-emerald-700"/>
                    </Link>
                    <Logo/>
                </div>
                <div className="flex text-emerald-700 gap-5 items-center">
                    <FaUser/>
                    <FaEarthAsia/>
                    <FcSettings/>
                </div>
            </div>
        </div>
        </>
    )
}