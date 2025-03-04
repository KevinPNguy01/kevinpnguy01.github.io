import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, IconButton } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from 'react';
import CodeImg from "/assets/code_screenshot_faded.png";
import { useWindowSize } from '../useWindowSize';

export function Intro() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollPercentage = (scrollTop / windowHeight);
            setOpacity(1-scrollPercentage*3);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const ref = useRef();
    const imageRef = useRef();

    return (
        <div 
            id="home-section" 
            className="pt-32 relative flex flex-col items-center md:items-start w-full"
        >
            <div ref={ref} className="justify-center flex flex-col items-start gap-4">
                <h2 className="text-white text-lg font-semibold">Introduction</h2>
                <h1 className="text-white text-6xl font-bold">Kevin Nguy</h1>
                <p className="text-neutral-400 text-lg font-semibold md:whitespace-pre-line">
                    {`I am a current third year studying computer science at UC Irvine.
                    My interests include web development, artificial intelligence, 
                    machine learning, and computer graphics.`}
                </p>
                <div>
                    <IconButton target="_blank" href="https://github.com/kevinpnguy01">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/knkevin/">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.youtube.com/knkevin/">
                        <YouTubeIcon/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.instagram.com/kevinpnguy/">
                        <InstagramIcon/>
                    </IconButton>
                </div>
                <div className="z-20 grid grid-cols-2 gap-4 w-48 md:gap-8 md:w-64 lg:w-72 py-4">
                    <Button className="!rounded-lg bg-gradient-to-br from-blue-500 to-blue-600" variant="contained" href="mailto: kevinpnguy01@gmail.com">Contact</Button>
                    <Button className="!rounded-lg !font-semibold !border-2" variant="outlined" target="_blank" href="https://drive.google.com/file/d/17ADWxamoleud6c1fuwy3iqPqQ7d96nK0/view?usp=sharing">Resume</Button>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img 
                    className="max-w-[120vw] -translate-y-[15%]"
                    ref={imageRef}
                    src={CodeImg}
                ></img>
            </div>
        </div>
    )
}