export function FeatureCard(props) {
    const {img, title, text} = props;
    return (
        <div className="flex flex-nowrap items-center">
            <div className="m-2 p-2 border-2 border-neutral-600 bg-neutral-800 rounded-full">
                {img}
            </div>
            <div>
                <h4 className="text-white font-bold">
                    {title}
                </h4>
                <span className="text-white text-sm font-semibold text-neutral-400">{text}</span>
            </div>
        </div>
    )
}