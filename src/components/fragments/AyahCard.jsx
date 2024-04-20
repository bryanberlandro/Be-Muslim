/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FiBookOpen, FiBookmark, FiPlay } from "react-icons/fi";

export function AyahCard({juz, ayah, arabic, transliteration, audio, translation, isPlaying, setIsPlaying}){    
    const tooglePlay = () => {
        const audioEl = document.getElementById(`audio${ayah}`)

        if(audioEl){
            if(!isPlaying){
                audioEl.play();
                setIsPlaying(true)
            } else {
                audioEl.pause();
                setIsPlaying(false)
            }
            // audioEl.addEventListener('timeupdate', updateTime);
        }
    }

    
    return(
        <>
        <div className="border-b-2 px-4 py-4 ">
            <div className="text-sm flex justify-between items-center font-medium text-emerald-600">
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
        </div>
        </>
    )
}