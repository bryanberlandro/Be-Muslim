import { FaArrowLeft } from "react-icons/fa";

export function Header(){
    return(
        <>
        <div className="bg-white opacity-0 w-full z-[999] border-b-2 px-[5%] fixed py-5 justify-between md:px-[7%] xl:py-4 xl:px-[5%]">
            <div className="w-full xl:max-w-7xl flex justify-between xl:mx-auto">
                <FaArrowLeft/>
            </div>
        </div>
        
        </>
    )
}