/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export function CurrentTime(){
    const [currTime, setCurrTime] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            const currentDate = new Date()
            const hours = currentDate.getHours()
            const minutes = currentDate.getMinutes()
            const seconds = currentDate.getSeconds()

            setCurrTime(`${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`)
            setIsLoading(false)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if(isLoading){
        return(
            <div className="h-2 w-14 bg-neutral-400 animate-pulse rounded-md"></div>
        )
    }

    return(
        <p>{currTime}</p> 
    )
}