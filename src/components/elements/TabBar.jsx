export function TabBar({onClick, name, activeTab, index}){
    return(
        <div 
            onClick={onClick} 
            className={`w-1/3 text-center cursor-pointer ${activeTab === index ? 'text-emerald-500' : 'text-neutral-400'}`}
            >
            <h1>{name}</h1>
        </div>
    )
}