import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi";
import { Footer } from "../components/layout/home/Footer";
import { ContextMenu } from "../components/fragments/ContextMenu";
import { DetailBar } from "../components/fragments/DetailBar";
import { SubText } from "../components/fragments/SubText";
import { AyahCard } from "../components/fragments/AyahCard";
import { Loader } from "../components/elements/Loader";
import { AiFillBackward, AiFillForward, AiFillInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FormatTime } from "../components/utils/FormatTime";
import { Header } from "../components/fragments/Header";

export default function SurahDetailPage(){
    const { id, surahName } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [showPlayer, setShowPlayer] = useState(false)
    const [progressBarWidth, setProgressBarWidth] = useState(0)
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)

    function getProgressBar(width, currTime, dur){
        setProgressBarWidth(width)
        setCurrTime(FormatTime(currTime))
        setDuration(FormatTime(dur))
    }

    function handleClosePlayer(){
        setShowPlayer(!showPlayer)
    }

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

    if(loading){
        return(
            <div className="pt-60 flex justify-center">
                <Loader/>
            </div>
        )
    }


    return(
        <>
        <Header linkTo="/quran"/>
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
                    setShowPlayer={setShowPlayer}
                    getProgressBar={getProgressBar}
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

        <div className={`w-full fixed bottom-0 pb-4 z-10 bg-white rounded-t-xl transition-all duration-500 ${showPlayer ? 'translate-y-0' : 'translate-y-96'}`}>
            <div className="w-full h-1 bg-neutral-300">
                <div className="w-0 h-1 bg-emerald-300 transition-all ease-in-out relative" style={{width: progressBarWidth ? progressBarWidth : 0}}>
                    <div className="rounded-full absolute right-0 -top-[2px] h-2 w-2 bg-emerald-400"></div>
                </div>
            </div>
            <div className="flex justify-between w-full text-xs pt-1 px-5">
                <p>{currTime}</p>
                <p className="text-neutral-400">{duration}</p>
            </div>
            <div className="flex gap-8 items-center justify-center pt-4">
                <AiFillInfoCircle/>
                <AiFillBackward/>
                <FaPlay/>
                <AiFillForward/>
                <FaXmark onClick={handleClosePlayer}/>
            </div>
        </div>
        <Footer/>
        </>
    )
}