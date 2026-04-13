function Card({name,message}){
    return(
        <div className="bg-red-900 text-black p-6 round-xl">
            <h2 className="text-xl font-Roboto">{name}</h2>
            <p className="mt-9">{message}</p>

        </div>
    )
}
export default Card