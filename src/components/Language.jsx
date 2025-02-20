export function Language(props) {
    const {name, src} = props;
    return (
        <div className="w-1/3 md:w-fit flex flex-col gap-2 justify-center items-center">
            <img className="h-16 md:h-24" src={src} alt={`${name} logo`}/>
            <span className="text-white w-full text-center font-bold">{name}</span>
        </div>
    )
}