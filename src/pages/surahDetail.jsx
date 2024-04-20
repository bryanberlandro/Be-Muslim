import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FiArrowRight, FiFastForward, FiPlay } from "react-icons/fi";
import { Footer } from "../components/layout/home/Footer";
import { ContextMenu } from "../components/fragments/ContextMenu";
import { DetailBar } from "../components/fragments/DetailBar";
import { SubText } from "../components/fragments/SubText";
import { AyahCard } from "../components/fragments/AyahCard";
import { Loader } from "../components/elements/Loader";
import { AiFillBackward, AiFillForward, AiFillPlayCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

export default function SurahDetailPage(){
    const { id, surahName } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

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


    

    console.log(data)

    if(loading){
        return(
            <div className="pt-60 flex justify-center">
                <Loader/>
            </div>
        )
    }


    return(
        <>
        <ContextMenu
        name={data.name.transliteration.en}
        number={data.number}
        verse={data.numberOfVerses}
        />

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
                <SubText
                value={data.tafsir.id}
                title={"Tafsir"}
                />
                <DetailBar
                revelation={data.revelation.id}
                sequence={data.sequence}
                verse={data.numberOfVerses}
                />
            </div>

            <div className="flex flex-col mt-10">
            {
                data.verses?.map(ver => (
                    <AyahCard
                    key={ver.number.inQuran}
                    arabic={ver.text.arab}
                    audio={ver.audio.secondary[0]}
                    ayah={ver.number.inSurah}
                    juz={ver.meta.juz}
                    transliteration={ver.text.transliteration.en}
                    translation={ver.translation.id}
                    
                    />
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
        </div>

        <div className="w-full fixed bottom-0 pb-4 z-10 bg-white rounded-t-xl">
            <div className="w-full h-1 bg-neutral-300">
                <div className="h-1 w-32 bg-emerald-300"></div>
            </div>
            <div className="flex justify-between w-full text-xs pt-1 px-5">
                <p>00.02</p>
                <p className="text-neutral-400">00.10</p>
            </div>
            <div className="flex gap-8 items-center justify-center">
                <AiFillBackward/>
                <FaPlay/>
                <AiFillForward/>
            </div>
        </div>
        <Footer/>
        </>
    )
}