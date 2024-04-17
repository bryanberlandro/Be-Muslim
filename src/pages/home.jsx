import { ReadCard } from "../components/fragments/ReadCard";
import { Navbar } from "../components/layout/Navbar";
import { DailyHadith } from "../components/layout/home/DailyHadith";
import { Footer } from "../components/layout/home/Footer";
import { Hero } from "../components/layout/home/Hero";
import { ListSurah } from "../components/layout/home/ListSurah";
import { Reciters } from "../components/layout/home/Reciters";
import TimeCard from "../components/layout/home/TimeCard";


export default function HomePage(){
    return (
        <>
        <Navbar/>
        <div className="pb-4 overflow-x-hidden">
            <div className="mb-36 xl:mb-0">
            <Hero/>
            </div>
            <div className="mb-10 px-[5%] xl:px-0">
                <TimeCard/>
                <div className="mt-10 xl:mt-16">
                    <Reciters/>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <ReadCard
                title={'Daily Verse'}
                name={'Asy-Syarh(94:5)'}
                value={'Maka, sesungguhnya beserta kesulitan ada kemudahan.'}
                />
            </div>
            <ListSurah/>
            <DailyHadith/>
        </div>
        <Footer/>
        </>
    )
}
