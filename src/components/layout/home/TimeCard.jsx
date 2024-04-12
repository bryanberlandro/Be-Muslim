import { useEffect, useState } from "react";
import axios from "axios";
import { CurrentTime } from "../../elements/CurrentTime";
import { PrayerTime } from "../../elements/PrayerTime";

const TimeCard = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const currentDate = new Date()
    const date = currentDate.getDate()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const monthName = currentDate.toLocaleString('default', {month:'long'})

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get(`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/depok/${year}/${month < 10 ? `0${month + 1}` : month + 1}.json`);
                setData(response.data[date-1])
                setIsLoading(false)
            } catch(err) {
                console.log(err)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if(isLoading){
        return (
            <div  className="w-full h-24  bg-neutral-200 animate-pulse rounded-lg py-4 px-5">
                <div className="relative flex justify-center flex-col text-white text-xs w-full h-full">
                    <div className="h-2 rounded-md bg-neutral-400 animate-pulse w-16"></div>
                    <PrayerTime data={data}/>
                    <CurrentTime/>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="w-full relative overflow-hidden bg-gradient-to-tr from-emerald-800 to-emerald-500 mx-auto py-4 shadow-lg rounded-lg">
                <img src="img/mosque.png" alt="" className="absolute w-full h-full object-cover"/>
                <div className="relative flex justify-center flex-col text-white text-xs w-full h-full px-5">
                    <p>{date} {monthName} {year}</p>
                    <PrayerTime data={data}/>
                    <CurrentTime/>
                </div>
        </div>
        </>
    )
}

export default TimeCard;