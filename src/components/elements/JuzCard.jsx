/* eslint-disable react/prop-types */
export function JuzCard({juz}){
    return(
        <>
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-4">
                <div className="flex gap-4 text-sm">
                    <h1 className="font-medium">{juz.surahs[0].number} .</h1>
                    <div className="flex flex-col">
                        <h1 className="font-medium">{juz.juzStartInfo}</h1>
                        <p className="text-xs"></p>
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <h1 className="font-medium text-right">{juz.surahs[0].nameArabic}</h1>
                    <p className="text-xs">{juz.surahs[0].verseCount} Ayat</p>
                </div>
            </div>
            <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-4">
                <div className="flex gap-4 text-sm">
                    <h1 className="font-medium">{juz.surahs[1].number} .</h1>
                    <div className="flex flex-col">
                        <h1 className="font-medium">{juz.juzEndInfo}</h1>
                        <p className="text-xs"></p>
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <h1 className="font-medium text-right">{juz.surahs[1].nameArabic}</h1>
                    <p className="text-xs">{juz.surahs[1].verseCount} Ayat</p>
                </div>
            </div>
            
        </div>
        </>
    )
}