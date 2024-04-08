import { CountdownTimer } from "./CountdownTimer";

const TimeCard = () => {
    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.toLocaleString('default', {month:'long'})
    const year = currentDate.getFullYear()

    return(
        <>
        <div className="w-full relative overflow-hidden bg-gradient-to-tr from-emerald-800 to-emerald-500 mx-auto py-4 shadow-lg rounded-lg">
                <img src="img/mosque.png" alt="" className="absolute w-full h-full object-cover"/>
                <div className="relative flex justify-center flex-col text-white text-xs w-full h-full px-5">
                    <p>{date} {month} {year}</p>
                    <h1 className="text-xl font-bold">Fajr 04:39</h1>
                    <CountdownTimer/>
                </div>
        </div>
        </>
    )
}

export default TimeCard;