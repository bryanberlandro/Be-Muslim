export function ErrorMsg({msg}){
    return(
        <div className="h-44 flex justify-center items-center text-center">
            <p className="text-neutral-400 font-bold text-sm">{msg}</p>  
        </div>
    )
}