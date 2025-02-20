import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from 'react';
import { LanguageList } from "./LanguageList";

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

    return (
        <div className="flex flex-col gap-8 mb-8 w-full">
            <div className="h-screen w-full justify-center flex flex-col items-center gap-4">
                <h1 className="text-white text-6xl text-center font-bold">Kevin Nguy</h1>
                <p className="text-white text-3xl text-center font-semibold">Coder for fun</p>
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
                <div className="grid grid-cols-2 gap-4 md:gap-8 md:w-1/3 lg:w-1/4 py-4">
                    <Button className="!rounded-full !font-semibold !border-2" variant="outlined" target="_blank" href="https://drive.google.com/file/d/17ADWxamoleud6c1fuwy3iqPqQ7d96nK0/view?usp=sharing">Resume</Button>
                    <Button className="!rounded-full bg-gradient-to-br from-blue-500 to-blue-600" variant="contained" href="mailto: kevinpnguy01@gmail.com">Hire Me</Button>
                </div>
                <div className='absolute animate-bounce bottom-0 pb-4' style={{opacity}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                    </svg>
                </div>
            </div>
            <LanguageList/>
        </div>
    )
}