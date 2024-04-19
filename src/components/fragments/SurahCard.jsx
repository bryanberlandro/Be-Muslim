import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SurahCard = ({number, surah, id, translate, ayat, total}) => {
    return (
        <>
        <Link to={`/surah/${id}/${surah}`}>
            <div className="border-b-2 py-4 flex justify-between items-center px-4 transition-all duration-75 rounded-md hover:scale-105 hover:bg-emerald-600 hover:text-white">
                <div className="flex gap-4">
                    <p className="text-sm">{number}</p>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-sm">{surah}</h1>
                        <p className="text-xs">{translate}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-sm text-right">{ayat}</h1>
                    <p className="text-xs">{total} Ayat</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default SurahCard;