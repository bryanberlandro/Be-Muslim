import { ReadCard } from "../components/fragments/ReadCard";
import { Hero } from "../components/layout/home/Hero";
import { ListSurah } from "../components/layout/home/ListSurah";
import { Reciters } from "../components/layout/home/Reciters";

const Home = () => {
    return (
        <>
        <div className="pb-4">
            <Hero/>
            <div className="pt-40 mb-10 px-[5%]">
                <Reciters/>
                <div className="w-full h-1 mt-5 bg-gradient-to-r from-white via-emerald-400"></div>
            </div>
            <ReadCard
            title={'surah'}
            name={'Al-Baqarah(2:3)'}
            value={"الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ"}
            position={'text-right'}
            />
            <ListSurah/>
        </div>
        </>
    )
}

export default Home;