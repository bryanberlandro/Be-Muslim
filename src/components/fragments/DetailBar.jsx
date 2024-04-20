/* eslint-disable react/prop-types */
export function DetailBar({revelation, sequence, verse}){
    return(
        <>
        <div className="rounded-lg bg-emerald-500 text-white px-5 py-3 flex justify-between divide-x-2 divide-emerald-200 shadow-sm mt-8">
            <div className="space-y-1 w-1/3 text-center">
                <h1 className="text-xs text-neutral-100">Revelation</h1>
                <p className="font-medium">{revelation}</p>
            </div>
            <div className="space-y-1 w-1/3 text-center">
                <h1 className="text-xs text-neutral-100">Sequence</h1>
                <p className="font-medium">{sequence}</p>
            </div>
            <div className="space-y-1 w-1/3 text-center">
                <h1 className="text-xs text-neutral-100">Verses</h1>
                <p className="font-medium">{verse}</p>
            </div>
        </div>
        </>
    )
}