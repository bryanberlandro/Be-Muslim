import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"

const tabs = [
    { name: "Surah", translate: 0, isActive: true },
    { name: "Juz", translate: 99.9, isActive: false },
    { name: "Bookmark", translate: 200, isActive: false },
]

const QuranPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index)
    }


    return(
        <>
        <div className="pt-nav px-[5%]">
            <div className="flex items-center bg-white rounded-full w-full px-6 py-2 justify-between text-sm shadow-sm border-2 border-emerald-100 transition-all duration-100 group focus-within:border-emerald-400 focus-within:scale-[1.02]">
                <input 
                type="text" 
                placeholder="Al-fatihah, Al-Mulk" 
                className="outline-none border-none w-[80%] "
                />
                <FaSearch className="text-emerald-600"/>
            </div>

            <div className="mt-10 flex border-b-2 border-neutral-100 py-2 text-sm font-semibold relative">
                <div className={`absolute transition-all duration-150 h-1 w-1/3 bg-emerald-300 bottom-0 rounded-full translate-x-[${tabs[activeTab].translate}%]`}></div>
                {
                    tabs.map((tab,index) => (
                        <div 
                        key={index}
                        onClick={() => handleTabClick(index)} 
                        className={`w-1/3 text-center cursor-pointer ${activeTab === index ? 'text-emerald-500' : 'text-neutral-400'}`}
                        >
                            <h1>{tab.name}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
        </>
    )
}

export default QuranPage