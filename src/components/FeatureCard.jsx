export function FeatureCard(props) {
    const {img, title, text} = props;
    return (
        <div className="w-2/3 lg:flex grid grid-rows-[1fr_2fr] lg:flex-nowrap shrink-0 items-end lg:items-center gap-4">
            <div className="p-2 h-fit w-fit border-2 border-neutral-600 bg-neutral-800 rounded-full">
                {img}
            </div>
            <div className="h-full flex flex-col">
                <h4 className="text-white font-bold">
                    {title}
                </h4>
                <span className="text-white text-sm font-semibold text-neutral-400">{text}</span>
            </div>
        </div>
    )
}