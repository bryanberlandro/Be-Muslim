/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export function PrayerTime({data}){
    const [prayTime, setPrayTime] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const prayName = Object.keys(data)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    useEffect(() => {
        const currentDate = new Date()
        const hours = currentDate.getHours()
        
        if(hours > 4 && hours <= 12){
            setPrayTime(prayName[5])
        } else if ( hours > 12 && hours <= 15){
            setPrayTime(prayName[6])
        } else if ( hours > 15 && hours <= 18){
            setPrayTime(prayName[7])
        } else if ( hours > 18 && hours <= 19){
            setPrayTime(prayName[8])
        } else{
            setPrayTime(prayName[2])
        }

    }, [data])

    useEffect(() => {
        setIsLoading(false)
    }, [prayTime])

    if(isLoading){``
        return(
            <div className="h-4 w-32 mb-1 mt-2 bg-gradient-to-r from-neutral-500 to-neutral-400 animate-pulse rounded-xl"></div>
        )
    }

    return(
        <h1 className="text-xl font-bold">
            {prayTime ? capitalizeFirstLetter(prayTime) : ''} {data[prayTime]}
        </h1>
    )
}