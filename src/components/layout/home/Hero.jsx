import { ReadCard } from "../../fragments/ReadCard";

export function Hero(){
    return(
        <>
        <div className="w-full rounded-xl relative h-96 flex flex-col justify-between md:h-[400px] xl:h-[500px]">
            <div className="absolute bg-gradient-to-t from-emerald-100 w-full h-full rounded-b-3xl overflow-hidden xl:rounded-b-none xl:from-emerald-200 xl:bg-gradient-to-tl xl:hidden">
                <img 
                src="img/mosque.png" 
                alt=""
                className="grayscale-[100] absolute bottom-0 opacity-20 xl:w-full xl:h-full xl:object-cover"
                />
            </div>
            <div className="xl:max-w-7xl pt-24 mx-auto relative xl:flex xl:h-full xl:items-center xl:justify-between xl:px-[5%]">
                <div className="relative px-[5%] w-[90%] xl:w-[50%] xl:space-y-4 xl:px-0">
                    <h1 className="text-2xl font-bold mt-1 md:text-4xl">
                        <span className="text-emerald-600 font-bold">Be Muslim</span>, Your Journey with Quran, Hadith, and Prayer.
                    </h1>
                    <p className="text-sm hidden xl:flex">Enlightening gateway to the profound wisdom of Islam through a curated collection of Quranic verses, Hadith, and rich Islamic history. Immerse yourself in a journey of discovery, understanding, and spiritual growth as we share the timeless teachings that inspire hearts and empower minds.</p>
                    <div className="flex mt-8 mb-4 gap-2 relative items-center px-[5%] md:mt-10 md:mb-6 xl:mb-0 xl:px-0 xl:pt-5">
                        <div className="flex">
                            <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-800 md:w-10 md:h-10">
                                <img src="img/user-3.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-700 -ml-4 md:w-10 md:h-10">
                                <img src="img/user-2.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-full relative overflow-hidden w-8 h-8 border-2 border-emerald-600 -ml-4 md:w-10 md:h-10">
                                <img src="img/user-1.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p className="text-xs font-semibold md:text-sm">132+ Total Monthly Listeners in BeMuslim</p>
                    </div>
                </div>
                <ReadCard
                title={'surah'}
                name={'Al-Baqarah(2:3)'}
                value={"الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ"}
                position={'text-right'}
                />
            </div>
        </div>
        </>
    )
}