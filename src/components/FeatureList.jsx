import { useRef, useState } from "react";

export function FeatureList(props) {
    const ref = useRef(null);
    const [focus, setFocus] = useState(0);
    return (
        <div 
            ref={ref}
            className="flex flex-row flex-nowrap lg:flex-col gap-4 w-full overflow-x-auto snap-x snap-mandatory"
            onScroll={() => {
                let index = 0;
                let min_x = ref.current.clientWidth;
                for (const child of ref.current.children) {
                    const x = Math.abs(child.getBoundingClientRect().x);
                    if (x < min_x) {
                        min_x = x;
                        setFocus(index);
                    }
                    index += 1;
                }
            }}
        >
            {props.children.map((child, index) => (
                <div 
                    key={index} 
                    className={`transition-[background-color,border-color] border ease-linear duration-200 w-2/3 lg:w-full snap-start shrink-0 rounded-xl bg-opacity-10 ${index === focus ? "bg-neutral-500 border-neutral-500" : "border-transparent"}`}
                    onClick={e => {
                        if (ref.current.clientWidth < ref.current.scrollWidth) {
                            e.currentTarget.scrollIntoView({behavior: "smooth", block: "nearest"});
                        } else {
                            setFocus(index);
                        }
                    }}
                >
                    {child}
                </div>
            ))}
            <div className="w-1/3 shrink-0"></div>
        </div>
    )
}