/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export function Timer({isLoading}){
    const [currTime, setCurrTime] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            const currentDate = new Date()
            const hours = currentDate.getHours()
            const minutes = currentDate.getMinutes()
            const seconds = currentDate.getSeconds()

            setCurrTime(`${hours < 0 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if(isLoading){
        return(
            <div className="h-4 w-7 bg-neutral-400 animate-pulse rounded-md"></div>
        )
    }

    return(
        <p>{currTime ? currTime : ''}</p> 
    )
}