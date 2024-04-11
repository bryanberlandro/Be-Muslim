import { Suspense, lazy } from "react";
import { ReadCard } from "../components/fragments/ReadCard";
const TimeCard = lazy(() => import("../components/fragments/TimeCard"));
import { Hero } from "../components/layout/home/Hero";
import { ListSurah } from "../components/layout/home/ListSurah";
import { Reciters } from "../components/layout/home/Reciters";

const Home = () => {
    function timerLoad(){
        return(
            <div className="w-full h-28 bg-neutral-200 animate-pulse py-4 rounded-lg">
                <div className="relative flex justify-center flex-col text-white gap-2 text-xs w-full h-full px-5">
                    <div className="w-7 h-2 rounded-md bg-neutral-300 animate-pulse"></div>
                    <div className="w-20 h-4 rounded-md bg-neutral-400 animate-pulse"></div>
                    <div className="w-16 h-3 mt-2 rounded-md bg-neutral-400 animate-pulse"></div>
                </div>
            </div>
        )
    }

    return (
        <>
        <div className="pb-4">
            <div className="mb-36">
            <Hero/>
            </div>
            <div className="mb-10 px-[5%]">
                <Suspense fallback={timerLoad()}>
                    <TimeCard/>
                </Suspense>
                <div className="mt-10">
                    <Reciters/>
                </div>
            </div>
            <ReadCard
            title={'Daily Verse'}
            name={'Asy-Syarh(94:5)'}
            value={'Maka, sesungguhnya beserta kesulitan ada kemudahan.'}
            />
            <ListSurah/>
        </div>
        </>
    )
}

export default Home;