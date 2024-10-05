import { FeatureList } from "./FeatureList";
import { GitHubRepoButton } from "./GitHubRepoButton";

export function Project(props) {
    const {title, description, img, children, repoName, repoLink, tags} = props;
    return (
        <section className="p-[5%] flex flex-wrap md:grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white font-bold text-4xl">
                        {title}
                    </h2>
                    <span className="text-neutral-400 font-semibold text-lg">
                        {description}
                    </span>
                </div>
                <FeatureList>
                    {children}
                </FeatureList>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="border border-neutral-500 bg-neutral-900 rounded-xl p-4 h-fit w-fit bg-gradient-to-br from-neutral-800 to-neutral-900">
                    {img}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {tags}
                </div>
                <GitHubRepoButton name={repoName} link={repoLink}/>
            </div>
        </section>
    )
}