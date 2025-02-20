import { Language } from './Language';
import { Divider } from '@mui/material';
import CLogo from "../assets/c.png";
import CppLogo from "../assets/c++.png";
import JavaLogo from "../assets/java.png";
import JavaScriptLogo from "../assets/javascript.png";
import TypeScriptLogo from "../assets/typescript.png";
import PythonLogo from "../assets/python.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import FirebaseLogo from "../assets/firebase.png";
import GraphQLLogo from "../assets/graphql.png";
import ReactLogo from "../assets/react.png";
import ReduxLogo from "../assets/redux.png";
import TailwindLogo from "../assets/tailwind.png";

export function Languages() {
    const languageClasses = "h-16 md:h-24";
    
    return (
        <>
            <Divider style={{ backgroundColor: "#222" }} />
            <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-white text-4xl font-bold text-center">
                    My Tech Stack
                </h2>
                <p className="w-full md:w-[36%] px-8 text-neutral-400 text-center font-semibold text-lg">
                    I like to work with a variety of languages and technologies. Here are the ones I'm most comfortable with.
                </p>
            </div>
            <div className="flex flex-wrap items-end justify-around gap-y-8 md:gap-x-16 px-[10%]">
                <Language name="C">
                    <img className={languageClasses} src={CLogo} alt="C Logo" />
                </Language>
                <Language name="C++">
                    <img className={languageClasses} src={CppLogo} alt="C++ Logo" />
                </Language>
                <Language name="Java">
                    <img className={languageClasses} src={JavaLogo} alt="Java Logo" />
                </Language>
                <Language name="JavaScript">
                    <img className={languageClasses} src={JavaScriptLogo} alt="JavaScript Logo" />
                </Language>
                <Language name="TypeScript">
                    <img className={languageClasses} src={TypeScriptLogo} alt="TypeScript Logo" />
                </Language>
                <Language name="Python">
                    <img className={languageClasses} src={PythonLogo} alt="Python Logo" />
                </Language>
                <Language name="HTML">
                    <img className={languageClasses} src={HtmlLogo} alt="HTML Logo" />
                </Language>
                <Language name="CSS">
                    <img className={languageClasses} src={CssLogo} alt="CSS Logo" />
                </Language>
                <Language name="FireBase">
                    <img className={languageClasses} src={FirebaseLogo} alt="Firebase Logo" />
                </Language>
                <Language name="GraphQL">
                    <img className={languageClasses} src={GraphQLLogo} alt="GraphQL Logo" />
                </Language>
                <Language name="React">
                    <img className={languageClasses} src={ReactLogo} alt="React Logo" />
                </Language>
                <Language name="Redux">
                    <img className={languageClasses} src={ReduxLogo} alt="Redux Logo" />
                </Language>
                <Language name="Tailwind CSS">
                    <img className={languageClasses} src={TailwindLogo} alt="Tailwind CSS Logo" />
                </Language>
            </div>
        </>
    );
}
