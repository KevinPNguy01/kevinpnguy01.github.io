export function Languages() {
    const languageClasses = "w-24";
    
    return (
        <div className="grid grid-flow-col items-center justify-around gap-8 px-[10%]">
            <img className={languageClasses} src={require('../assets/c.png')} alt="C"/>
            <img className={languageClasses} src={require('../assets/c++.png')} alt="C++"/>
            <img className={languageClasses} src={require('../assets/java.png')} alt="Java"/>
            <img className={languageClasses} src={require('../assets/python.png')} alt="Python"/>
            <img className={languageClasses} src={require('../assets/javascript.png')} alt="JavaScript"/>
            <img className={languageClasses} src={require('../assets/typescript.png')} alt="TypeScript"/>
        </div>
    )
}