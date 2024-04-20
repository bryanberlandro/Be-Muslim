/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa";

export function ContextMenu({name, verse, number}){
    return(
        <>
        <div className="fixed z-10 top-[70px] bg-emerald-600 text-white w-full py-4 flex px-[5%] justify-between text-sm">
            <div className="flex items-center gap-2 text-sm">
                <h1>{name}</h1>
                <FaChevronDown/>
            </div>
            <div className="flex items-center gap-2">
                <h1 className="text-neutral-200">{verse} Ayah</h1>
                <p>/</p>
                <h1>Page {number}</h1>
            </div>
        </div>
        </>
    )
}