export function FeatureList(props) {
    return (
        <div className="flex flex-row flex-nowrap lg:flex-col gap-4 w-full overflow-x-auto">
            {props.children}
        </div>
    )
}