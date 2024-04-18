import { useEffect, useState } from "react"
import { InputSearch } from "../components/elements/InputSearch";
import { Loader } from "../components/elements/Loader";
import axios from "axios";
import SurahCard from "../components/fragments/SurahCard";
import { Footer } from "../components/layout/home/Footer";
import { TabBar } from "../components/elements/TabBar";


export default function QuranPage(){
    const tabs = [
        { name: "Surah", index: 0, isActive: true },
        { name: "Juz", index: 1, isActive: false },
        { name: "Bookmark", index: 2, isActive: false },
    ]
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchRes, setSearchRes] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [translate, setTranslate] = useState('')

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get('https://api.quran.gading.dev/surah')
                setData(response.data.data)
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
        } else if (index == 2){
            setTranslate('translate-x-[200%]')
        } else {
            setTranslate('translate-x-0')
        }
    }

    function handleSearch(e){
        const inputValue = e.target.value.toLowerCase()
        setSearchTerm(inputValue)

        const filteredData = data.filter((item) => 
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
            
            <div className={`flex flex-col mt-2 ${loading ? 'h-96 justify-center items-center' : ''}`}>
                {loading ? (<Loader/>)
                    :   searchTerm && searchRes.length === 0 ? 
                        (
                            <div className="h-44 flex justify-center items-center text-center">
                                <p className="text-neutral-400 font-bold text-sm">Your search didn't match any surah. Please try a different keyword.</p>  
                            </div>
                        ) 
                    :  
                    (
                        (searchTerm ? searchRes : data).map(item => (
                            <SurahCard
                                key={item.number}
                                ayat={item.name.short}
                                number={item.number}
                                surah={item.name.transliteration.en}
                                total={item.numberOfVerses}
                                translate={item.name.translation.en}
                            />
                        ))
                    )
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}
