import { useEffect, useState } from "react";
import axios from "axios";
import { Timer } from "../elements/Timer";

const TimeCard = () => {
    const [data, setData] = useState([])
    const [prayTime, setPrayTime] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const currentDate = new Date()
    const date = currentDate.getDate()
    const monthName = currentDate.toLocaleString('default', {month:'long'})
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const prayName = Object.keys(data)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };


    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get(`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/depok/${year}/${month < 10 ? `0${month + 1}` : month + 1}.json`);
                setData(response.data[date-1])
                setIsLoading(false)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const currentDate = new Date()
        const hours = currentDate.getHours()
        
        switch(true){
            case hours > 4 : 
                return setPrayTime(prayName[5])
            case hours > 13 : 
                return setPrayTime(prayName[6])

        }
    }, [data])

    
    return(
        <>
        <div className="w-full relative overflow-hidden bg-gradient-to-tr from-emerald-800 to-emerald-500 mx-auto py-4 shadow-lg rounded-lg">
                <img src="img/mosque.png" alt="" className="absolute w-full h-full object-cover"/>
                <div className="relative flex justify-center flex-col text-white text-xs w-full h-full px-5">
                    <p>{date} {monthName} {year}</p>
                    <h1 className="text-xl font-bold">Isya {data.isya}</h1>
                    <Timer isLoading={isLoading}/>
                </div>
        </div>
        </>
    )
}

export default TimeCard;