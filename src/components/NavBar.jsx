import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'

const sections = ["Home", "Skills", "Projects"];

export function NavBar() {
    const ref = useRef();
    const [currentSection, setCurrentSection] = useState(sections[0]);
    
    useEffect(() => {
        const scrollListener = () => {
            const navBarHeight = ref.current.getBoundingClientRect().height;
            for (const sectionName of sections) {
                const sectionEl = document.getElementById(`${sectionName.toLowerCase()}-section`);
                const rect = sectionEl.getBoundingClientRect();
                if (rect.top - navBarHeight <= 1) {
                    setCurrentSection(sectionName);
                }
            }
        }

        document.addEventListener("scroll", scrollListener);

        return () => {
            document.removeEventListener("scroll", scrollListener);
        }
    }, []);

    return (
        <AppBar ref={ref} className="w-full! border-b border-white/8 bg-neutral-950/80! backdrop-blur-lg">
            <Box className="w-full px-[15%] py-3 grid grid-cols-2 lg:grid-cols-3 place-items-center">
                <h1
                    className="first:justify-self-start text-lg font-bold text-nowrap"
                >
                    Kevin Nguy
                </h1>

                <Box
                    className="hidden gap-2 lg:flex"
                >
                    {sections.map((section) => (
                        <Button
                            className={`font-semibold! rounded-none! ${section === currentSection ? "text-[14px]! text-white! border-b-2!" : "text-[13px]! text-neutral-500!"}`}
                            onClick={() => {
                                const navBarHeight = ref.current.getBoundingClientRect().height;
                                const el = document.getElementById(`${section.toLowerCase()}-section`);
                                const scrollPos = el.getBoundingClientRect().y + window.scrollY - navBarHeight;
                                window.scrollTo({top: scrollPos, behavior: "smooth"});
                            }}
                            key={section}
                        >
                            {section}
                        </Button>
                    ))}
                </Box>

                <Box className="last:justify-self-end flex justify-end gap-4">
                    <Button
                        className="text-[13px]! font-semibold! text-neutral-500!"
                        target="_blank" href="https://drive.google.com/file/d/17ADWxamoleud6c1fuwy3iqPqQ7d96nK0/view?usp=sharing"
                    >
                        Resume
                    </Button>
                    <Button
                        className="text-[13px]! font-semibold! bg-gradient-to-br from-blue-500 to-blue-600"
                        variant="contained"
                        href="mailto: kevinpnguy01@gmail.com"
                    >
                        Contact
                    </Button>
                    <IconButton
                        className="hidden!"
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Box>
        </AppBar>
    )
}