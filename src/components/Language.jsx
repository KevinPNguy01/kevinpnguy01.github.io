export function Language(props) {
    const {name, children} = props;
    return (
        <div className="w-1/3 lg:w-fit flex flex-col gap-2 justify-center items-center">
            {children}
            <span className="text-white w-full text-center font-bold">{name}</span>
        </div>
    )
}