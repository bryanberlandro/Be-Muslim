import { useEffect, useState } from "react"
import { InputSearch } from "../components/elements/InputSearch";
import axios from "axios";
import { Footer } from "../components/layout/home/Footer";
import { TabBar } from "../components/elements/TabBar";
import { TabSurah } from "../components/layout/quran/TabSurah";
import { TabJuz } from "../components/layout/quran/TabJuz";

const tabs = [
    { name: "Surah", index: 0, isActive: true },
    { name: "Juz", index: 1, isActive: false },
    { name: "Bookmark", index: 2, isActive: false },
]

export default function QuranPage(){
    const [loading, setLoading] = useState(true)
    const [surahData, setSurahData] = useState([]);

    const [activeTab, setActiveTab] = useState(0);
    const [translate, setTranslate] = useState('')
    const [transform, setTransform] = useState('')

    const [searchRes, setSearchRes] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get('https://api.quran.gading.dev/surah')
                setSurahData(response.data.data)
                setLoading(false)
            } catch(err){
                console.log(err)
            }
        }

        fetchData()
    }, [])


    const handleTabClick = (index) => {
        setActiveTab(index)
        if(index == 1){
            setTranslate('translate-x-[99.9%]')
            setTransform('-translate-x-1/3')
            setLoading(true)
        } else if (index == 2){
            setTranslate('translate-x-[200%]')
            setTransform('-translate-x-2/3')
            setLoading(true)
        } else {
            setTranslate('translate-x-0')
            setTransform('translate-x-0')
            setLoading(false)
        }
    }

    function handleSearch(e){
        const inputValue = e.target.value.toLowerCase()
        setSearchTerm(inputValue)

        const filteredData = surahData.filter((item) => 
            item.name.transliteration.en.toLowerCase().includes(inputValue)
        )
        setSearchRes(filteredData)
    }


    return(
        <>
        <div className="pt-nav px-[5%] pb-10">
            <InputSearch
            onChange={handleSearch}
            />
            <div className="mt-6 flex border-b-2 border-neutral-100 py-2 text-sm font-semibold relative">
                <div className={`absolute transition-all duration-300 h-1 w-1/3  bg-emerald-300 bottom-0 rounded-full ${translate}`}></div>
                {
                    tabs.map((tab,index) => (
                        <TabBar
                        key={index}
                        activeTab={activeTab}
                        index={tab.index}
                        name={tab.name}
                        onClick={() => handleTabClick(index)}
                        />
                    ))
                }
            </div>
            
            <div className="w-full overflow-hidden">
                <div className={`flex w-[300%] transition-all duration-300 ${transform} h-max`}>
                    <TabSurah
                    data={surahData}
                    loading={loading}
                    searchRes={searchRes}
                    searchTerm={searchTerm}
                    />

                    <TabJuz/>

                    <div className="w-1/3 bg-white">
                        <h1>Bookmark</h1>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}
