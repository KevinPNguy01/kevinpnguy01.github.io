import CLogo from "/assets/c.png";
import CppLogo from "/assets/c++.png";
import JavaLogo from "/assets/java.png";
import JavaScriptLogo from "/assets/javascript.png";
import TypeScriptLogo from "/assets/typescript.png";
import PythonLogo from "/assets/python.png";
import HtmlLogo from "/assets/html.png";
import CssLogo from "/assets/css.png";
import FirebaseLogo from "/assets/firebase.png";
import GraphQLLogo from "/assets/graphql.png";
import ReactLogo from "/assets/react.png";
import ReduxLogo from "/assets/redux.png";
import TailwindLogo from "/assets/tailwind.png";

const languages = [
    {name: "C", src: CLogo},
    {name: "C++", src: CppLogo},
    {name: "Java", src: JavaLogo},
    {name: "JavaScript", src: JavaScriptLogo},
    {name: "TypeScript", src: TypeScriptLogo},
    {name: "Python", src: PythonLogo},
    {name: "HTML", src: HtmlLogo},
    {name: "CSS", src: CssLogo},
    {name: "Firebase", src: FirebaseLogo},
    {name: "GraphQL", src: GraphQLLogo},
    {name: "React", src: ReactLogo},
    {name: "Redux", src: ReduxLogo},
    {name: "Tailwind CSS", src: TailwindLogo},
]

export function SkilsSection() {
    return (
        <section id="skills-section" className="flex flex-col py-16 gap-12">
            <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-white text-4xl font-bold text-center">
                    My Tech Stack
                </h2>
                <p className="w-full md:px-8 text-neutral-400 text-center font-semibold text-lg md:text-nowrap md:whitespace-pre-line">
                    {`I like to work with a variety of languages and technologies. 
                    Here are the ones I'm most comfortable with.`}
                </p>
            </div>
            <div className="animate-[infinite-scroll_40s_infinite_linear] md:animate-none w-fit flex md:flex-wrap items-center md:justify-around gap-x-16 gap-y-8 h-16 md:h-fit">
                {languages.map((lang, index) => <Language key={index} {...lang}/>)}
                <div className="md:hidden flex gap-x-16">{languages.map((lang, index) => <Language key={index} {...lang}/>)}</div>
            </div>
        </section>
    )
}

function Language(props) {
    const {name, src} = props;
    return (
        <div className="md:w-fit flex flex-col gap-2 justify-center items-center">
            <img className="max-w-fit h-16 md:h-24" src={src} alt={`${name} logo`}/>
            <span className="text-white w-full text-center font-bold">{name}</span>
        </div>
    )
}