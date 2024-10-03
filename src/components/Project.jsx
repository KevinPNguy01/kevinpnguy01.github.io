export function Project(props) {
    const {title, description, img, children} = props;
    return (
        <div className="bg-black p-[5%]">
            <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold text-4xl">
                            {title}
                        </h2>
                        <span className="text-neutral-400 font-semibold text-lg">
                            {description}
                        </span>
                    </div>
                    <div className="flex flex-row flex-nowrap lg:flex-col gap-4 w-full overflow-x-auto">
                        {children}
                    </div>
                </div>
                <div className="border border-neutral-500 bg-neutral-900 rounded-xl p-4 h-fit">
                    {img}
                </div>
            </div>
        </div>
    )
}