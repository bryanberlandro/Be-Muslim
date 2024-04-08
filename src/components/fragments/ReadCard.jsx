/* eslint-disable react/prop-types */
import { FaBookOpen } from "react-icons/fa";

export function ReadCard({title, name, value, position}){
    return(
        <>
        <div className="bg-white px-5 py-5 relative rounded-xl shadow-xl mx-auto w-[90%]">
                <div className="flex justify-between border-b-2 pb-4 border-emerald-100 text-sm">
                    <h1>{title}</h1>
                    <h1 className="font-medium">{name}</h1>
                </div>
                <div className={`py-6 flex justify-between ${position} font-medium  items-center`}>
                    <p>{value}</p>
                </div>
                <div className="flex gap-2 pt-2 text-sm">
                    <button className="w-full py-2 font-medium bg-emerald-500 rounded-md flex justify-center items-center gap-2 text-white">
                        <FaBookOpen/>
                        Read Now
                    </button>
                    <button className="w-full py-2 border-emerald-500 border-2 rounded-md text-emerald-500 font-medium">
                        All Surah
                    </button>
                </div>
            </div>
        </>
    )
}