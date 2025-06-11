import { FeatureList } from "../Features/FeatureList";
import { GitHubRepoButton } from "../GitHubRepoButton";
import { TechList } from "./TechStack/TechList";

export function Project(props) {
    const {title, description, imgSrc, imgAlt, children, repoName, repoLink, tags} = props;
    return (
        <section className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 items-center">
            <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white font-bold text-2xl">
                        {title}
                    </h2>
                    <span className="text-neutral-400 font-semibold text-md">
                        {description}
                    </span>
                </div>
                <FeatureList>
                    {children}
                </FeatureList>
            </div>
            <div className="flex flex-col gap-8 items-center w-full">
                <img className="shadow-md shadow-black rounded-xl h-fit w-fit" src={imgSrc} alt={imgAlt}/>
                <TechList tags={tags}/>
                <GitHubRepoButton name={repoName} link={repoLink}/>
            </div>
        </section>
    )
}