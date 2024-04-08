import { FaBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
    return(
        <>
        <header className="w-full px-[5%] fixed py-5 flex justify-between">
            <h1 className="font-marcellus font-bold text-lg text-emerald-500">Be Muslim</h1>
            <div className="flex gap-5 text-lg items-center">
                <div className="relative">
                <FaBell/>
                <span className="absolute top-0 right-0 bg-emerald-300 rounded-full w-2 h-2"></span>
                </div>
                <IoMenu/>
            </div>
        </header>
        </>
    )
}