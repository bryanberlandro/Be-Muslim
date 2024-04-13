import { useState } from "react"
import { ViewAll } from "../../elements/ViewAll"
import { useFetch } from "../../../hooks/useFetch"
import { Loader } from "../../elements/Loader"
import { FaWifi } from "react-icons/fa"

export function DailyHadith(){
    const { data, isLoading, isError } = useFetch('https://hadis-api-id.vercel.app/hadith/bukhari')
    const [loadMore, setLoadMore] = useState(false)

    function handleLoadMore(){
        setLoadMore(!loadMore)
    }

    if(isLoading){
        return (
            <div className="mt-5 py-3 w-full px-[5%] bg-white rounded-xl">
                <div className="flex items-end mt-5 justify-between">
                    <h1 className="sub-title w-[70%]">Journey through <span className="text-emerald-600">Hadith</span> Wisdom</h1>
                    <ViewAll value={'See all hadith'}/>
                </div>
                <div className="w-full h-32 flex justify-center items-center">
                    <Loader/>
                </div>
            </div>
        )
    }

    if(isError.code == "ERR_NETWORK"){
        return (
            <div className="flex flex-col items-center text-center px-[5%] my-5">
                <div className="text-neutral-600 flex flex-col items-center">
                    <FaWifi className="text-lg"/>
                    <h1 className="font-bold text-lg">Ooops!</h1>
                </div>
                <p className="text-neutral-500 text-sm">No internet connection found. Check your connection or try again</p>
            </div>
        )
    }

    if(isError){
        return <h1>{isError.message}</h1>
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
                <div className="space-y-2">
                    <p className="text-right text-sm mt-6 mb-4">{data.items[6].arab}</p>
                    <span className="text-emerald-500 font-medium">Artinya :  
                    </span>
                    <p className="text-sm text-neutral-800">
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