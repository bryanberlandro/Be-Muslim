import { FaSearch } from "react-icons/fa"

const QuranPage = () => {
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
            <div className="mt-10 flex border-b-2 py-2 text-sm font-semibold">
                <div className="w-1/3 text-center">
                    <h1>Surah</h1>
                </div>
                <div className="w-1/3 text-center">
                    <h1>Juz</h1>
                </div>
                <div className="w-1/3 text-center">
                    <h1>Bookmark</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuranPage