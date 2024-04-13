import { ReadCard } from "../components/fragments/ReadCard";
import { DailyHadith } from "../components/layout/home/DailyHadith";
import { Footer } from "../components/layout/home/Footer";
import { Hero } from "../components/layout/home/Hero";
import { ListSurah } from "../components/layout/home/ListSurah";
import { Reciters } from "../components/layout/home/Reciters";
import TimeCard from "../components/layout/home/TimeCard";


const Home = () => {
    return (
        <>
        <div className="pb-4 overflow-x-hidden">
            <div className="mb-36">
            <Hero/>
            </div>
            <div className="mb-10 px-[5%]">
                <TimeCard/>
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
            <DailyHadith/>
        </div>
        <Footer/>
        </>
    )
}

export default Home;