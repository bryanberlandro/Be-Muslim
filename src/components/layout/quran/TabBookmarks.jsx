import { useEffect, useState } from "react";
import { ErrorMsg } from "../../elements/ErrorMsg";
import { AyahCard } from "../../fragments/AyahCard";

export function TabBookmark(){
    const bookmarkData = JSON.parse(localStorage.getItem('bookmark'))
    const [data, setData] = useState(bookmarkData)

    useEffect(() => {
        console.log(data)
    }, [data])

    function getProgressBar(){

    }

    return(
        <>
        <div className="w-1/3 bg-white">
            <div className="flex flex-col gap-2 pt-4">
                {
                    data ? 
                    data.map(mark => (
                        <AyahCard
                        key={mark.ayah}
                        arabic={mark.arabic}
                        audio={mark.audio}
                        ayah={mark.ayah}
                        juz={mark.juz}
                        surahName={mark.name}
                        translation={mark.translation}
                        transliteration={mark.transliteration}
                        getProgressBar={getProgressBar}
                        />
                    ))
                    : 
                <ErrorMsg msg={"No bookmark yet"}/>

                }
            </div>
        </div>
        </>
    )
}