/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export function Sidebar({showSidebar}){
    return(
        <>
        <div 
        className={`fixed top-0  overflow-hidden pl-1 right-0 pt-[80px] bg-gradient-to-t from-emerald-100 via-white to-white w-44 h-dvh z-[998] ${showSidebar ? 'translate-x-0' : 'translate-x-96'} transition-all duration-300`}>
            <img 
            src="img/pattern.png" 
            alt="" 
            className="absolute grayscale w-full bottom-0  opacity-20 object-cover"/>
            <ul>
                <li className="w-full py-3 hover:bg-neutral-100 px-4">
                    <a href="">Home</a>
                </li>
                <li className="w-full py-3 hover:bg-neutral-100 px-4">
                    <a href="">Read Qur'an</a>
                </li>
                <li className="w-full py-3 hover:bg-neutral-100 px-4">
                    <a href="">Hadith</a>
                </li>
                <li className="w-full py-3 hover:bg-neutral-100 px-4">
                    <a href="">Quiz</a>
                </li>
            </ul>
        </div>
        </>
    )
}