import { Languages } from "./Lanuages";

export function Intro() {
    return (
        <div className="flex flex-col gap-8 mb-8 w-full">
            <div className="h-[100vh] w-full justify-center flex flex-col items-center gap-4">
                <h1 className="text-white text-6xl font-bold">Kevin Nguy</h1>
                <p className="text-white text-3xl font-semibold">Coder for fun</p>
            </div>
            <Languages/>
        </div>
    )
}