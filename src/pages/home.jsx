const Home = () => {
    return (
        <>
        <div className="w-full rounded-xl overflow-hidden relative bg-gradient-to-t from-emerald-100 h-96">
            <img 
            src="img/mosque.png" 
            alt="" 
            className="grayscale-[100] absolute bottom-0 opacity-40"
            />
            <div className="relative pt-24 px-[5%]">
                <h1 className="font-medium">Guiding Light, Sacred Insights</h1>
                <h1 className="text-xl font-semibold mt-1"><span className="text-emerald-800 font-bold">Be Muslim</span>, Your Journey with Quran, Hadith, and Prayer.</h1>
            </div>
        </div>
        </>
    )
}

export default Home;