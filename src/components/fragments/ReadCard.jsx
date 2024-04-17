/* eslint-disable react/prop-types */
import { FaBookOpen } from "react-icons/fa";

export function ReadCard({title, name, value, position}){
    return(
        <>
        <div className="bg-white px-5 py-5 relative rounded-xl shadow-xl mx-auto w-[90%] md:w-[80%] md:px-7 md:py-7 xl:w-[40%] xl:h-max xl:mx-0">
                <div className="flex justify-between border-b-2 pb-4 border-emerald-100 text-sm">
                    <h1>{title}</h1>
                    <h1 className="font-medium">{name}</h1>
                </div>
                <div className={`py-6 flex ${position} font-medium items-center md:py-7`}>
                    <p>{value}</p>
                </div>
                <div className="flex gap-2 pt-2 text-sm">
                    <button className="w-full py-2 font-medium bg-emerald-500 rounded-md flex justify-center items-center gap-2 text-white md:py-3">
                        <FaBookOpen/>
                        Read Now
                    </button>
                    <button className="w-full py-2 border-emerald-500 border-2 rounded-md text-emerald-500 font-medium md:py-3">
                        All Surah
                    </button>
                </div>
            </div>
        </>
    )
}