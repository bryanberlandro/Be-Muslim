import { useState } from "react"
import { ViewAll } from "../../elements/ViewAll"
import { useFetch } from "../../../hooks/useFetch"

export function DailyHadith(){
    const { data, isLoading, isError } = useFetch('https://hadis-api-id.vercel.app/hadith/bukhari')
    const [loadMore, setLoadMore] = useState(false)

    function handleLoadMore(){
        setLoadMore(!loadMore)
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(isError){
        return <h1>Error</h1>
    }


    return(
        <>
        <div className="mt-5 py-3 w-full px-[5%] bg-white rounded-xl">
            <div className="flex items-end mt-5 justify-between">
            <h1 className="sub-title w-[70%]">Journey through <span className="text-emerald-600">Hadith</span> Wisdom</h1>
            <ViewAll value={'See all hadith'}/>
            </div>
            <div className="mt-2 py-4 rounded-lg w-full">
                <div className="flex justify-between items-center">
                    <h1 className="font-medium">H.R {data.name}</h1>
                    <p className="text-xs">Total Hadith : {data.total}</p>
                </div>
                <div className="space-y-4">
                    <p className="text-right text-sm mt-6">{data.items[6].arab}</p>
                    <p className="text-xs text-neutral-800">
                        <span className="text-emerald-500 font-medium">Artinya :  
                        </span>
                        {
                        loadMore 
                        ? data.items[6].id
                        : data.items[6].id.substring(0,210)+'...'
                        }
                        <span 
                        className="text-emerald-500 cursor-pointer"
                        onClick={handleLoadMore}
                        > {loadMore ? 'Hide' : 'More'}</span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}