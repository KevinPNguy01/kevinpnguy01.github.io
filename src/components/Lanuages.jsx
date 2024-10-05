import { Language } from './Language';
import { Divider } from '@mui/material';

export function Languages() {
    const languageClasses = "h-16 md:h-24";
    
    return (
        <>
            <Divider style={{backgroundColor: "#222"}}/>
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
                    <img className={languageClasses} src={require('../assets/c.png')} alt=""/>
                </Language>
                <Language name="C++">
                    <img className={languageClasses} src={require('../assets/c++.png')} alt=""/>
                </Language>
                <Language name="Java">
                    <img className={languageClasses} src={require('../assets/java.png')} alt=""/>
                </Language>
                <Language name="JavaScript">
                    <img className={languageClasses} src={require('../assets/javascript.png')} alt=""/>
                </Language>
                <Language name="TypeScript">
                    <img className={languageClasses} src={require('../assets/typescript.png')} alt=""/>
                </Language>
                <Language name="Python">
                    <img className={languageClasses} src={require('../assets/python.png')} alt=""/>
                </Language>
                <Language name="HTML">
                    <img className={languageClasses} src={require('../assets/html.png')} alt=""/>
                </Language>
                <Language name="CSS">
                    <img className={languageClasses} src={require('../assets/css.png')} alt=""/>
                </Language>
                
                <Language name="FireBase">
                    <img className={languageClasses} src={require('../assets/firebase.png')} alt=""/>
                </Language>
                <Language name="GraphQL">
                    <img className={languageClasses} src={require('../assets/graphql.png')} alt=""/>
                </Language>
                <Language name="React">
                    <img className={languageClasses} src={require('../assets/react.png')} alt=""/>
                </Language>
                <Language name="Redux">
                    <img className={languageClasses} src={require('../assets/redux.png')} alt=""/>
                </Language>
                <Language name="Tailwind CSS">
                    <img className={languageClasses} src={require('../assets/tailwind.png')} alt=""/>
                </Language>
            </div>
        </>
    )
}