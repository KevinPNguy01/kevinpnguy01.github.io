import { IconButton } from "@mui/material";
import { Languages } from "./Lanuages";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function Intro() {
    return (
        <div className="flex flex-col gap-8 mb-8 w-full">
            <div className="h-[100vh] w-full justify-center flex flex-col items-center gap-4">
                <h1 className="text-white text-6xl font-bold">Kevin Nguy</h1>
                <p className="text-white text-3xl font-semibold">Coder for fun</p>
                <div>
                    <IconButton target="_blank" href="https://github.com/kevinpnguy01">
                        <GitHubIcon style={{color: "white"}}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/knkevin/">
                        <LinkedInIcon style={{color: "white"}}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.youtube.com/knkevin/">
                        <YouTubeIcon style={{color: "white"}}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.instagram.com/kevinpnguy/">
                        <InstagramIcon style={{color: "white"}}/>
                    </IconButton>
                </div>
            </div>
            <Languages/>
        </div>
    )
}