import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

export function CountdownTimer(){
    const [loading, setLoading] = useState(true);
    const [countdown, setCountdown] = useState('');
    const currentDate = new Date()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const targetTime = new Date();
            targetTime.setHours(4);
            targetTime.setMinutes(39);
            targetTime.setSeconds(0);
    
            const timeDiff = targetTime.getTime() - currentDate.getTime();
    
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
            if(timeDiff == 0){
                setCountdown('FAJR')
            }
            const countdownStr = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
            setLoading(false)
            setCountdown(countdownStr)
        }, 1000)
        
        return () => clearInterval(intervalId)
    }, [countdown])

    if(loading){
        return(
            <div className="w-16 h-3 mt-2 rounded-md bg-neutral-300 animate-pulse">

            </div>
        )
    }

    return(
        <div className="mt-2 flex items-center gap-2 font-semibold text-sm">
            <FaRegClock/>
            <p>{countdown}</p>
        </div>
    )
}
