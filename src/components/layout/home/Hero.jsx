import { ReadCard } from "../../fragments/ReadCard";

export function Hero(){
    return(
        <>
        <div className="w-full rounded-xl relative h-96 flex flex-col justify-between">
            <div className="absolute bg-gradient-to-t from-emerald-100 w-full h-full rounded-b-3xl overflow-hidden">
                <img 
                src="img/mosque.png" 
                alt=""
                className="grayscale-[100] absolute bottom-0 opacity-20"
                />
            </div>
            <div className="relative pt-24 px-[5%] w-[90%]">
                <h1 className="text-2xl font-bold mt-1"><span className="text-emerald-600 font-bold">Be Muslim</span>, Your Journey with Quran, Hadith, and Prayer.</h1>
            </div>
            <div className="flex mt-8 mb-4 gap-2 relative items-center px-[5%]">
                <div className="flex">
                    <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-800">
                        <img src="img/user-3.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-700 -ml-4">
                        <img src="img/user-2.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-600 -ml-4">
                        <img src="img/user-1.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <p className="text-xs font-semibold">132+ Total Monthly Listeners in BeMuslim</p>
            </div>
            <ReadCard
            title={'Daily Verse'}
            name={'Asy-Syarh(94:5)'}
            value={'Maka, sesungguhnya beserta kesulitan ada kemudahan.'}
            />
        </div>
        </>
    )
}