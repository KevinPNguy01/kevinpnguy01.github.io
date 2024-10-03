export function Languages() {
    return (
        <div className="flex flex-wrap justify-around h-[10%] mx-[5%] px-8">
            <img className="h-full" src={require('../assets/c.png')} alt="C"/>
            <img className="h-full" src={require('../assets/c++.png')} alt="C++"/>
            <img className="h-full" src={require('../assets/java.png')} alt="Java"/>
            <img className="h-full" src={require('../assets/python.png')} alt="Python"/>
            <img className="h-full" src={require('../assets/javascript.png')} alt="JavaScript"/>
            <img className="h-full" src={require('../assets/typescript.png')} alt="TypeScript"/>
        </div>
    )
}