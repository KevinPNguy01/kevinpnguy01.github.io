import { TechChip } from "./TechChip";

export function TechList(props) {
    const {tags} = props;
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => <TechChip key={index} label={tag}/>)}
        </div>
    );
}