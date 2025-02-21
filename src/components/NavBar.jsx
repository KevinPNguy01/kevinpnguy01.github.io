import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';

const sections = ["Home", "Skills", "Projects"];

export function NavBar() {
    const ref = useRef();

    return (
        <AppBar ref={ref} className="border-b border-white/8 bg-neutral-950/80! backdrop-blur-lg">
            <Toolbar>
                <Box className="px-14 flex flex-grow items-center justify-between">
                    <h1
                        className="w-1/4 text-lg font-bold"
                    >
                        Kevin Nguy
                    </h1>
                    <Box
                        className="flex gap-2"
                    >
                        {sections.map((section) => (
                            <Button
                                className="text-[13px]! font-semibold! text-neutral-500!"
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
                    <Box className="flex justify-end gap-4 w-1/4">
                        <Button
                            className="text-[13px]! font-semibold! text-neutral-500!"
                        >
                            Resumes
                        </Button>
                        <Button
                            className="text-[13px]! font-semibold!"
                            variant="contained"
                        >
                            Contact
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}