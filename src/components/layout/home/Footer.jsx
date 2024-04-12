import { FaBookOpen } from "react-icons/fa";

export function Footer(){
    return(
        <>
        <div className="w-full bg-emerald-700 py-6 text-white flex flex-col justify-center items-center text-center px-[5%] relative">
            <img 
            src="img/pattern.png" 
            alt="" 
            className="absolute grayscale w-full h-full object-cover"/>
            <div className="relative">
                <h1 className="text-lg font-bold">Begin Your Journey with BeMuslim</h1>
                <p className="text-sm mt-2">a site that presents inspirational stories from the Quran, prayer times, and Hadith for Muslim knowledge seekers</p>
                <button className="mx-auto mt-5 px-6 py-2 rounded-full bg-white text-emerald-700 font-medium flex items-center gap-2">
                    <FaBookOpen/>
                    Start Reading
                </button>
            </div>
        </div>
        </>
    )
}