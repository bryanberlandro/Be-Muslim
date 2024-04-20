import { useState } from "react"

/* eslint-disable react/prop-types */
export function SubText({title, value}){
    const [showMore, setShowMore] = useState(false)

    function handleShowMore(){
        setShowMore(!showMore)
    }

    return(
        <>
        <div className="mt-5">
            <h1 className="text-emerald-600 font-semibold text-base">{title}</h1>
            <p>
                {
                showMore 
                    ?
                    value
                    :
                    value.substring(0,60)+"..."
                }
                <span className="text-emerald-500 font-medium cursor-pointer" onClick={handleShowMore}
                >
                    {showMore ? 'hide' : 'show more'}
                </span>
            </p>
        </div>
        </>
    )
}