import { useEffect, useState } from "react";
import axios from "axios";
import { CurrentTime } from "../elements/CurrentTime";
import { PrayerTime } from "../elements/PrayerTime";

const TimeCard = () => {
    const [data, setData] = useState([])
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
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    
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