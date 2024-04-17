import { useEffect, useState } from "react"
import { InputSearch } from "../components/elements/InputSearch";
import { Loader } from "../components/elements/Loader";
import axios from "axios";
import SurahCard from "../components/fragments/SurahCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/home/Footer";


export default function QuranPage(){
    const tabs = [
        { name: "Surah", translate: 0, isActive: true },
        { name: "Juz", translate: 99, isActive: false },
        { name: "Bookmark", translate: 200, isActive: false },
    ]
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchRes, setSearchRes] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

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
        <Navbar/>
        <div className="pt-nav px-[5%] pb-10">
            <InputSearch
            onChange={handleSearch}
            />
            <div className="mt-6 flex border-b-2 border-neutral-100 py-2 text-sm font-semibold relative">
                <div className={`absolute transition-all duration-300 h-1 w-1/3  bg-emerald-300 bottom-0 rounded-full translate-x-[${tabs[activeTab].translate}%]`}></div>
                {
                    tabs.map((tab,index) => (
                        <div 
                        key={index}
                        onClick={() => handleTabClick(index)} 
                        className={`w-1/3 text-center cursor-pointer ${activeTab === index ? 'text-emerald-500' : 'text-neutral-400'}`}
                        >
                            <h1>{tab.name}</h1>
                        </div>
                    ))
                }
            </div>
            
            <div className={`flex flex-col mt-2 ${loading ? 'h-96 justify-center items-center' : ''}`}>
                {
                    loading 
                    ?   (<Loader/>)
                    :   (
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
