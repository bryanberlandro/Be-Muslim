import { useEffect, useState } from "react";
import { JuzCard } from "../../elements/JuzCard";
import { JuzData } from "../../../data/juzData";

export function TabJuz(){
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JuzData.juzs);
    }, [])

    console.log(data)
    return(
        <>
        <div className="w-1/3 flex flex-col mt-4 gap-4 h-max">
            {
                data.map(juz => (
                <div key={juz.number} className="rounded-lg bg-white w-full py-4 px-4 shadow-sm">
                    <div className="flex justify-between w-full text-sm">
                        <h1 className="font-medium">Juz {juz.number}</h1>
                        <a href="" className="underline underline-offset-2 text-emerald-500 font-bold">Read Juz</a>
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