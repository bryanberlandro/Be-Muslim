/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FiBookOpen, FiBookmark, FiPlay } from "react-icons/fi";

export function AyahCard({juz, ayah, arabic, transliteration, audio, translation, setShowPlayer, getProgressBar})
{
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const updateTime = () => {
        const audioEl = document.getElementById(`audio${ayah}`)
        setCurrTime(audioEl.currentTime)
        setDuration(audioEl.duration)
    }

    useEffect(() => {
        const audioEl = document.getElementById(`audio${ayah}`)
        audioEl.addEventListener('timeupdate', updateTime)

        return () => {
            audioEl.removeEventListener('timeupdate', updateTime)
        }
    }, [])

    useEffect(() => {
        const progressBarWidth = (currTime / duration) * 100 + '%'
        getProgressBar(progressBarWidth, currTime, duration)
    }, [currTime])
    
    const tooglePlay = () => {
        const audioEl = document.getElementById(`audio${ayah}`)
        if(audioEl){
            if(!isPlaying){
                audioEl.play();
                setIsPlaying(true)
                setShowPlayer(true)
            } else {
                audioEl.pause();
                setIsPlaying(false)
            }
            // audioEl.addEventListener('timeupdate', updateTime);
        }
    }

    
    return(
        <>
        <div className="border-b-2 px-4 py-4 relative">
            <div className="text-lg flex justify-between items-center font-medium text-emerald-600">
                <div className="flex items-center gap-5">
                    <h1>{juz} : {ayah}</h1>
                    <FiBookOpen/>
                    <FiPlay 
                    onClick={tooglePlay} 
                    className="cursor-pointer hover:scale-95"/>
                </div>
                <FiBookmark/>
            </div>
            <div className="text-right py-10 text-2xl">
                <h1>{arabic}</h1>
            </div>
            <div className="text-sm font-medium">
                <h1>{transliteration}</h1>
            </div>
            <div className="text-sm mt-5 space-y-1">
                <h1 className="font-medium text-emerald-600">Meanings</h1>
                <p className="text-neutral-600">{translation}</p>
            </div>
            <audio id={`audio${ayah}`} hidden controls className="w-full mt-2">
                <source src={audio} type="audio/mp3"/>
            </audio>
            {/* <div className="w-full h-1 bg-neutral-300 rounded-lg mt-5">
                <div className="w-0 h-1 bg-emerald-300 transition-all ease-in-out relative" style={{width: progressBarWidth ? progressBarWidth : 0}}>
                    <div className="rounded-full absolute right-0 -top-[2px] h-2 w-2 bg-emerald-400"></div>
                </div>
            </div> */}
        </div>
        </>
    )
}