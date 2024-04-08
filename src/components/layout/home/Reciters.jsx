import { ReciterCard } from "../../fragments/ReciterCard";

export function Reciters(){
    return(
        <>
        <div>
            <h1 className="font-semibold text-xl">Listen to Holy Quran recited by your preferred reciters.</h1>
            <div className="mt-4">
                <p className="underline underline-offset-2 text-emerald-600 text-right text-xs">See all reciters</p>
                <div className="flex flex-wrap justify-between mt-4 gap-y-2">
                    <ReciterCard 
                    name={'Mishary Bin Rashid Alafasy'}
                    image={"img/reciter-1.jpeg"}
                    />
                    <ReciterCard
                    name={'Abdul Rahman Al-Sudais'}
                    image={'img/reciter-2.png'}
                    />
                    <ReciterCard 
                    name={'Mishary Bin Rashid Alafasy'}
                    image={"img/reciter-1.jpeg"}
                    />
                    <ReciterCard
                    name={'Abdul Rahman Al-Sudais'}
                    image={'img/reciter-2.png'}
                    />
                </div>
            </div>
        </div>
        </>
    )
}