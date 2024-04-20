/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FiBookOpen, FiBookmark, FiPlay } from "react-icons/fi";

export function AyahCard({juz, ayah, arabic, transliteration, audio, translation, setShowPlayer, getProgressBar})
{
    const markedData = JSON.parse(localStorage.getItem('bookmark'))
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [marked, setMarked] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [data, setData] = useState([markedData])

    const updateTime = () => {
        const audioEl = document.getElementById(`audio${ayah}`)
        setCurrTime(audioEl.currentTime)
        setDuration(audioEl.duration)
    }

    useEffect(() => {
        const bookmarkData = localStorage.getItem('bookmark')
        if(!bookmarkData){
            localStorage.setItem('bookmark',JSON.stringify([]))
        }

        const audioEl = document.getElementById(`audio${ayah}`)
        audioEl.addEventListener('timeupdate', updateTime)

        return () => {
            audioEl.removeEventListener('timeupdate', updateTime)
        }
    }, [])

    const progressBarWidth = (currTime / duration) * 100 + '%'
    useEffect(() => {
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
        }
    }

    const handleBookmark = () => {
        setMarked(!marked)
        setShowToast(true)
        const dataAyah =  {
            juz: juz, 
            ayah: ayah, 
            arabic: arabic, 
            transliteration: transliteration, 
            audio: audio, 
            translation: translation
        }
        const bookmarkData = JSON.parse(localStorage.getItem('bookmark'))
        const updateBookmark = [...bookmarkData, dataAyah]
        localStorage.setItem('bookmark', JSON.stringify(updateBookmark));

        setData(updateBookmark)
    }

    useEffect(() => {
        const selectedAyah = document.getElementById(`ayah${ayah}`)
        if(!marked){
            setShowToast(false)
            selectedAyah.classList.remove('bg-emerald-50')
            return
        }
        selectedAyah.classList.add('bg-emerald-50')
        const isTimeout = setTimeout(() => {
            setShowToast(false)
        }, 2500)
        return () => clearTimeout(isTimeout)    
    }, [marked])


    
    return(
        <>
        <div id={`ayah${ayah}`} className="border-b-2 px-4 py-4 relative">
            <div className="text-lg flex justify-between items-center font-medium text-emerald-600">
                <div className="flex items-center gap-5">
                    <h1>{juz} : {ayah}</h1>
                    <FiBookOpen/>
                    <FiPlay 
                    onClick={tooglePlay} 
                    className="cursor-pointer hover:scale-95"/>
                </div>
                {
                    marked 
                    ? 
                    <BsFillBookmarkCheckFill onClick={handleBookmark}/>
                    :
                    <FiBookmark onClick={handleBookmark}/>
                }
            </div>
            <div className="text-right py-10 text-2xl">
                <h1>{arabic}</h1>
            </div>
            <div className="text-sm font-medium space-y-2">
                <h1>{transliteration}</h1>
                <p className="text-neutral-500">{translation}</p>
            </div>
            <audio id={`audio${ayah}`} hidden controls className="w-full mt-2">
                <source src={audio} type="audio/mp3"/>
            </audio>
        </div>
        <div className={`fixed transition-all duration-300 ${showToast ? 'translate-y-0' : 'translate-y-96'} z-10 bottom-0 w-full px-[5%] py-2 left-0`}>
            <div className="bg-emerald-400 w-full h-full rounded-lg text-white flex items-center gap-5 px-5 py-4 font-medium">
                <FaCheckCircle className="text-lg"/>
                <h1>Saved to bookmark</h1>
            </div>
        </div>
        </>
    )
}