import axios from "axios";
import { Suspense, lazy, useEffect, useState } from "react";
import { ViewAll } from "../../elements/ViewAll";
const SurahCard = lazy(() => import('../../fragments/SurahCard'))

export function ListSurah(){
    const [surah, setSurah] = useState([]);

    useEffect(() => {  
        async function fetchData(){
            try{
                const response = await axios.get('https://api.quran.gading.dev/surah')
                const data = response.data;
                setSurah(data.data)
            } catch(err){
                console.log(err);
            }
        } 
        
        fetchData()
    }, [])

    function surahLoad(){
        return(
            <div className="my-10 w-full flex justify-center items-center">
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-emerald-100 animate-spin dark:text-emerald-200 fill-emerald-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="mt-12 px-[5%] py-4 overflow-x-hidden relative rounded-xl bg-white md:px-[7%] xl:px-[5%]">
            <div className="xl:max-w-7xl xl:mx-auto xl:px-[5%]">
                <h1 className="sub-title">Lets start the journey of Enlightenment</h1>
                <div className="flex justify-between items-center mt-6 md:mt-10">
                    <div className="flex text-sm border-2 rounded-full overflow-hidden items-center w-max">
                        <div className="px-4 py-1 rounded-full bg-emerald-600 text-white text-sm md:px-6 md:py-2">
                            <p>Surah</p>
                        </div>
                        <div className="px-4 py-1 md:px-6 md:py-2">
                            <p>Juz</p>
                        </div>
                    </div>
                    <ViewAll value={'See all surah'}/>
                </div>
                <div className="flex flex-col mt-4 relative md:mt-8">
                    <Suspense fallback={surahLoad()}>
                    {
                        surah?.slice(0,8).map(data => (
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
                    </Suspense>
                </div>
                    <div className="absolute z-10 bg-gradient-to-t from-neutral-100 via-neutral-100 bg-opacity-20 w-full left-0 h-24 bottom-0 flex justify-center items-center">
                        <div className="w-[45%] bg-gradient-to-l from-emerald-300 rounded-md h-1"></div>
                        <button className="px-4 w-32 py-1 rounded-md bg-emerald-400 text-white transition-all duration-150 text-sm hover:scale-110 md:text-base md:w-36 md:py-2">
                            All Surah
                        </button>
                        <div className="w-[45%] bg-gradient-to-r from-emerald-300 rounded-md h-1"></div>
                    </div>
            </div>
        </div>
        </>
    )
}