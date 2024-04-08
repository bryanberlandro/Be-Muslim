import axios from "axios";
import { useEffect, useState } from "react";
import { SurahCard } from "../../fragments/SurahCard";

export function ListSurah(){
    const [surah, setSurah] = useState([]);

    useEffect(() => {  
        async function fetchData(){
            try{
                const response = await axios.get('https://api.quran.gading.dev/surah')
                const data = response.data;
                setSurah(data.data.slice(0,10))
            } catch(err){
                console.log(err);
            }
        } 
        
        fetchData()
    }, [])

    console.log(surah)
    return(
        <>
        <div className="mt-12 px-[5%]">
            <h1 className="font-semibold text-xl">Lets start the journey of Enlightenment</h1>
            <div className="flex justify-between items-center mt-6">
                <div className="flex text-sm border-2 rounded-full overflow-hidden items-center w-max">
                    <div className="px-4 py-1 rounded-full bg-emerald-600 text-white text-sm">
                        <p>Surah</p>
                    </div>
                    <div className="px-4 py-1">
                        <p>Juz</p>
                    </div>
                </div>
                <p className="underline underline-offset-2 text-emerald-600 text-right text-xs">See all surah</p>
            </div>
            <div className="flex flex-col mt-4">
                {
                    surah?.map(data => (
                        <SurahCard
                        key={data.number}
                        number={data.number}
                        surah={data.name.transliteration.en}
                        translate={data.name.translation.en}
                        ayat={data.name.short}
                        total={data.numberOfVerses}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}