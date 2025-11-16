import { FeatureList } from "../Features/FeatureList";
import { GitHubRepoButton } from "../GitHubRepoButton";
import { ImageSlides } from "../ImageSlides";
import { VideoButton } from "../VideoButton";
import { WebsiteButton } from "../WebsiteButton";
import { TechList } from "./TechStack/TechList";

export function Project(props) {
  const {
    title,
    description,
    imgs,
    children,
    repoName,
    repoLink,
    tags,
    websiteName,
    websiteLink,
    videoName,
    videoLink,
  } = props;

  const repoExists = repoName && repoLink;
  const websiteExists = websiteName && websiteLink;
  const videoExists = videoName && videoLink;

  return (
    <section className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 items-center w-full">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold text-2xl">{title}</h2>
          <span className="text-neutral-400 font-semibold text-md">
            {description}
          </span>
        </div>
        <FeatureList>{children}</FeatureList>
      </div>
      <div className="flex flex-col gap-8 items-center w-full">
        <ImageSlides imgs={imgs} />
        <TechList tags={tags} />
        {(repoExists || websiteExists || videoExists) && (
          <div
            className={`items-center justify-center gap-3 flex flex-col place-items-center md:grid *:w-full! *:h-full  ${
              (repoExists && websiteExists) ||
              (repoExists && videoExists) ||
              (websiteExists && videoExists)
                ? "grid-cols-2 w-full"
                : "w-full md:w-1/2 grid-cols-1"
            }`}
          >
            {repoExists && <GitHubRepoButton name={repoName} link={repoLink} />}
            {websiteExists && (
              <WebsiteButton name={websiteName} link={websiteLink} />
            )}
            {videoExists && <VideoButton name={videoName} link={videoLink} />}
          </div>
        )}
      </div>
    </section>
  );
}
