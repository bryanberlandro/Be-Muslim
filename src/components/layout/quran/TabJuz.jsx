/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { JuzCard } from "../../elements/JuzCard";
import { JuzData } from "../../../data/juzData";
import { Loader } from "../../elements/Loader";

export function TabJuz({activeTab}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setData(JuzData.juzs);
        if(activeTab == 1){
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [activeTab])
    

    if(loading){
        return (
            <div className="w-1/3 items-center justify-center flex flex-col mt-4 gap-4 h-44">
                <Loader/>
            </div>
        )
    }

    return(
        <>
        <div className="w-1/3 flex flex-col mt-4 gap-4 h-max">
            {
                data.map(juz => (
                <div key={juz.number} className="rounded-lg bg-white w-full py-4 px-4 shadow-sm">
                    <div className="flex justify-between w-full text-sm">
                        <h1 className="font-medium">Juz {juz.number}</h1>
                        <a href="" className="underline underline-offset-2 text-emerald-500 font-semibold">Read Juz</a>
                    </div>
                    <JuzCard
                    juz={juz}
                    />
                </div>
                ))
            }
        </div>
        </>
    )
}