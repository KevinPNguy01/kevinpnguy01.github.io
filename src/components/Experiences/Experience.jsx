import { FeatureList } from "../Features/FeatureList";
import { ImageSlides } from "../ImageSlides";
import { TechList } from "../Projects/TechStack/TechList";

export function Experience(props) {
    const { title, organization, duration, companyLogo, children, imgs, tags } = props;

    return (
        <section className="flex flex-wrap lg:grid lg:grid-cols-2 md:gap-2 gap-6 items-center">
            <div className="w-full flex flex-col md:gap-2 gap-6">
                <div className="w-full flex flex-row gap-6">
                    <img className="shadow-md shadow-black rounded-full h-16 w-16 md:h-20 md:w-20 border-2 border-neutral-600" src={companyLogo}/>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-bold text-xl">
                            {title}
                        </h2>
                        <h3 className="text-white font-semibold text-md">
                            {organization}
                        </h3>
                        <span className="text-neutral-400 font-semibold text-sm">
                            {duration}
                        </span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-1"/>
                    <FeatureList>
                        {children}
                    </FeatureList>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center w-full">
                <ImageSlides imgs={imgs}/>
                <TechList tags={tags}/>
            </div>
        </section>
    );
}