import { FaBookOpen } from "react-icons/fa";

export function FooterBanner(){
    return(
        <div className="w-full bg-emerald-700 py-6 text-white flex flex-col justify-center items-center text-center px-[5%] relative md:px-[7%]">
            <img 
            src="img/pattern.png" 
            alt="" 
            className="absolute grayscale w-full h-full object-cover"/>
            <div className="relative xl:max-w-7xl xl:px-[5%]">
                <h1 className="text-lg font-bold md:text-xl">Begin Your Journey with BeMuslim</h1>
                <p className="text-sm mt-2 md:text-base">a site that presents inspirational stories from the Quran, prayer times, and Hadith for Muslim knowledge seekers</p>
                <button className="mx-auto mt-8 px-10 py-2 rounded-full bg-white text-emerald-700 font-medium flex items-center gap-2 md:mt-10 md:px-14 md:py-3">
                    <FaBookOpen/>
                    Start Reading
                </button>
            </div>
        </div>
    )
}