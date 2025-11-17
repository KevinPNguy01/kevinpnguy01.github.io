import React, { useRef, useState } from "react";

export function FeatureList(props) {
  const ref = useRef(null);
  const [focus, setFocus] = useState(0);
  return (
    <div
      ref={ref}
      className="thin-scroll pb-1 md:pb-0 flex flex-row flex-nowrap md:flex-col gap-2 w-full overflow-x-auto snap-x snap-mandatory"
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
      {React.Children.map(props.children, (child, index) => (
        <div
          key={index}
          className={`transition-[background-color,border-color] border-[2px] ease-linear duration-200 w-2/3 md:w-full snap-start shrink-0 rounded-xl md:bg-transparent md:border-transparent ${
            index === focus
              ? "bg-neutral-500/10 border-white/10"
              : "border-transparent"
          }`}
          onClick={(e) => {
            if (ref.current.clientWidth < ref.current.scrollWidth) {
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
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
  );
}
