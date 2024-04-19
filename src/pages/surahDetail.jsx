import axios from "axios"
import { useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { FiArrowRight, FiBookOpen, FiBookmark, FiPlay } from "react-icons/fi";
import { Footer } from "../components/layout/home/Footer";

export default function SurahDetailPage(){
    const { id, surahName } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get(`https://api.quran.gading.dev/surah/${id}`)
                setData(response.data.data)
                setLoading(false)
            } catch(err){
                console.log(err)
            }
        }
        
        fetchData()
    }, [])


    function handleShowMore(){
        setShowMore(!showMore)
    }

    console.log(data)

    if(loading){
        return(
            <h1>....</h1>
        )
    }


    return(
        <>
        <div className="fixed top-[70px] bg-emerald-600 text-white w-full py-4 flex px-[5%] justify-between text-sm">
            <div className="flex items-center gap-2 text-sm">
                <h1>{data.name.transliteration.en}</h1>
                <FaChevronDown/>
            </div>
            <div className="flex items-center gap-2">
                <h1 className="text-neutral-200">{data.numberOfVerses} Ayah</h1>
                <p>/</p>
                <h1>Page {data.number}</h1>
            </div>
        </div>
        <div className="pt-36 pb-10 px-[5%]">
            <h1 className="font-medium text-lg">{data.number}</h1>

            <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold">{data?.name.long}</h1>
                <div>
                    <h1 className="font-medium text-neutral-700">{data.name.transliteration.en}</h1>
                    <p className="text-sm text-neutral-500">( {data.name.translation.en} )</p>
                </div>
            </div>

            <div className="text-sm mt-10">
                <div className="mt-5">
                    <h1 className="text-emerald-600 font-semibold text-base">Tafsir</h1>
                    <p>
                        {
                        showMore 
                            ?
                            data.tafsir.id
                            :
                            data.tafsir.id.substring(0,60)
                        }... 
                        <span className="text-emerald-500 font-medium cursor-pointer" onClick={handleShowMore}
                        >
                            {showMore ? 'hide' : 'show more'}
                        </span>
                    </p>
                </div>
                <div className="rounded-lg bg-emerald-500 text-white px-5 py-3 flex justify-between divide-x-2 divide-emerald-200 shadow-sm mt-8">
                    <div className="space-y-1 w-1/3 text-center">
                        <h1 className="text-xs text-neutral-100">Revelation</h1>
                        <p className="font-medium">{data.revelation.id}</p>
                    </div>
                    <div className="space-y-1 w-1/3 text-center">
                        <h1 className="text-xs text-neutral-100">Sequence</h1>
                        <p className="font-medium">{data.sequence}</p>
                    </div>
                    <div className="space-y-1 w-1/3 text-center">
                        <h1 className="text-xs text-neutral-100">Verses</h1>
                        <p className="font-medium">{data.numberOfVerses}</p>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col mt-5">
            {
                data.verses?.map(ver => (
                <div key={ver.number.inSurah} className="border-b-2 px-4 py-4">
                    <div className="text-sm flex justify-between items-center font-medium text-emerald-600">
                        <div className="flex items-center gap-5">
                            <h1>{ver.meta.juz} : {ver.number.inQuran}</h1>
                            <FiBookOpen/>
                            <FiPlay/>
                        </div>
                        <FiBookmark/>
                    </div>
                    <div className="text-right py-5 text-xl">
                        <h1>{ver.text.arab}</h1>
                    </div>
                    <div className="text-sm">
                        <h1>{ver.text.transliteration.en}</h1>
                    </div>
                </div>
                ))
            }
            </div>

            <div className="flex justify-between my-10 text-sm">
                <button className="px-10 py-2 rounded-md border-2  border-emerald-500 text-emerald-500">Read again</button>
                <button className="flex items-center gap-2 text-emerald-600 font-semibold">
                    Next surah
                    <FiArrowRight/>
                </button>
            </div>

            <Footer/>

        </div>
        </>
    )
}