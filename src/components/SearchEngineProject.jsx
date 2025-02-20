import { Tab, Tabs } from "@mui/material";
import GestureIcon from '@mui/icons-material/Gesture';
import { FeatureCard } from "./FeatureCard";
import { useState } from "react";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import TimerIcon from '@mui/icons-material/Timer';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsIcon from '@mui/icons-material/Settings';
import LayersIcon from '@mui/icons-material/Layers';
import MemoryIcon from '@mui/icons-material/Memory';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BoltIcon from '@mui/icons-material/Bolt';
import MergeIcon from '@mui/icons-material/Merge';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import StorageIcon from '@mui/icons-material/Storage';
import { FeatureList } from "./FeatureList";
import { GitHubRepoButton } from "./GitHubRepoButton";
import { TechChip } from "./TechChip";
import SearchEngineImg from "../assets/searchengine.png"
import { TechList } from "./TechList";

export function SearchEngineProject() {
    const [value, setValue] = useState(0);
    return (
        <section className="p-[5%] flex flex-wrap md:grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white font-bold text-4xl">
                        Web Crawler and Search Engine
                    </h2>
                    <span className="text-neutral-400 font-semibold text-lg">
                        A custom web crawler, indexer, and search engine.
                    </span>
                </div>
                <Tabs 
                    value={value}
                    onChange={(_, val) => setValue(val)}
                    sx={{
                        ".MuiTab-root": {
                            color: "white"
                        },
                        ".MuiTab-root.Mui-selected": {
                            color: "white",
                            fontWeight: "600"
                        },
                        ".MuiTabs-indicator": {
                            backgroundColor: "white"
                        }
                    }}
                >
                    <Tab label="Web Crawler" id="tab-crawler"/>
                    <Tab label="Indexer"/>
                    <Tab label="Search Engine"/>
                </Tabs>
                {value === 0 && <FeatureList>
                    <FeatureCard title="Multithreading" text="Utilizes multiple threads to crawl multiple domains in parallel." img={<GestureIcon/>}/>
                    <FeatureCard title="Stores Web Pages" text="Saves web page content into JSON files to be indexed later." img={<WysiwygIcon/>}/>
                    <FeatureCard title="Politeness" text="Adheres to robots.txt and enforces a minimum delay between requests to the same domain." img={<TimerIcon/>}/>
                    <FeatureCard title="Pauseable Crawling" text="Allows crawling to be stopped and resumed at any time without loss of progress." img={<PauseIcon/>}/>
                    <FeatureCard title="Customizable Crawling" text="Uses a config file to configure seed URLs, allowable domains, and minimum politeness." img={<SettingsIcon/>}/>
                </FeatureList>}
                {value === 1 && <FeatureList>
                    <FeatureCard title="Multiprocessing" text="Utilizes multiple processes to index multiple web pages at once." img={<LayersIcon/>}/>
                    <FeatureCard title="Partial Indexing" text="Indexed content is regularly written to files and combined at the end, minimizing memory usage." img={<MemoryIcon/>}/>
                    <FeatureCard title="N-gram Indexing" text="Breaks text into n-grams, enabling more flexible and relevant query matching." img={<TextFieldsIcon/>}/>
                    <FeatureCard title="Pauseable Indexing" text="Allows indexing to be stopped and resumed at any time without loss of progress." img={<PauseIcon/>}/>
                    <FeatureCard title="Recursive Index" text="The index of tokens is indexed itself, allowing tokens to be looked up faster." img={<StorageIcon/>}/>
                </FeatureList>}
                {value === 2 && <FeatureList>
                    <FeatureCard title="Ranking" text="Results are ranked by a combination of keyword frequency and placement in the page content." img={<BarChartIcon/>}/>
                    <FeatureCard title="AI Summary" text="Generates concise summaries of search results using OpenAI's GPT-3.5." img={<PsychologyIcon/>}/>
                    <FeatureCard title="Token Stemming" text="Reduces words to their root forms, improving the precision of search results." img={<MergeIcon/>}/>
                    <FeatureCard title="Fast Results" text="Results take only a few milliseconds for an index of 55,000 web pages." img={<BoltIcon/>}/>
                    <FeatureCard title="Graphical Interface" text="Enter queries into a searchbox and view results in a clean, interactive layout." img={<ScreenSearchDesktopIcon/>}/>
                </FeatureList>}
            </div>
            <div className="flex flex-col gap-8 items-center">
                <img className="shadow-md shadow-black rounded-xl h-fit w-fit" src={SearchEngineImg} alt="Search engine screenshot"/>
                <TechList tags={["Python", "OpenAI", "Streamlit", "Requests"]}/>
                <GitHubRepoButton name="Web-Crawler-Search-Engine" link="https://github.com/KevinPNguy01/Web-Crawler-Search-Engine"/>
            </div>
        </section>
    )
}