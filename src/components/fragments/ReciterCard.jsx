/* eslint-disable react/prop-types */
export function ReciterCard({image,name}){
    return(
        <>
        <div className="w-[100%] h-56 md:h-72 shadow-sm  rounded-lg bg-gradient-to-t from-emerald-800  via-emerald-50 font-semibold flex flex-col text-center justify-end text-sm relative overflow-hidden text-white ">
            <img src={image} alt="" className="absolute w-full h-full object-cover mix-blend-multiply "/>
            <div className="relative pb-2 px-2">
                <p>{name}</p>
            </div>
        </div>
        </>
    )
}