import { FaSearch } from "react-icons/fa";

export function InputSearch({onChange}){
    return(
        <div className="flex items-center bg-white rounded-full w-full px-6 py-2 justify-between text-sm shadow-sm border-2 border-emerald-100 transition-all duration-100 group focus-within:border-emerald-400 focus-within:scale-[1.02]">
                <input 
                type="text" 
                placeholder="Al-fatihah, Al-Mulk" 
                className="outline-none border-none w-[80%]"
                onChange={onChange}
                />
                <FaSearch className="text-emerald-600"/>
        </div>
    )
}