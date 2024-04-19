/* eslint-disable react/prop-types */
import { ErrorMsg } from "../../elements/ErrorMsg";
import { Loader } from "../../elements/Loader";
import SurahCard from "../../fragments/SurahCard";

export function TabSurah({loading, searchTerm, searchRes, data}){
    return(
        <>
        <div className={`px-[1%] flex flex-col transition-all duration-300 mt-2 w-1/3  ${loading ? 'h-96 justify-center items-center' : ''}`}>
            {loading ? (<Loader/>)
                :   searchTerm && searchRes.length === 0 ? 
                    (
                        <ErrorMsg msg={"Your search didn't match any surah. Please try a different keyword."}/>
                    ) 
                :  
                (
                    (searchTerm ? searchRes : data).map(item => (
                        <SurahCard
                            key={item.number}
                            ayat={item.name.short}
                            number={item.number}
                            surah={item.name.transliteration.en}
                            total={item.numberOfVerses}
                            translate={item.name.translation.en}
                        />
                    ))
                )
            }
        </div>
        </>
    )
}