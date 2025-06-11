import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloudIcon from '@mui/icons-material/Cloud';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MapIcon from '@mui/icons-material/Map';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import MouseIcon from '@mui/icons-material/Mouse';
import PaletteIcon from '@mui/icons-material/Palette';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ShareIcon from '@mui/icons-material/Share';
import StorageIcon from '@mui/icons-material/Storage';
import SyncIcon from '@mui/icons-material/Sync';
import TerrainIcon from '@mui/icons-material/Terrain';
import TextureIcon from '@mui/icons-material/Texture';
import TransformIcon from '@mui/icons-material/Transform';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WifiIcon from '@mui/icons-material/Wifi';
import { Divider } from '@mui/material';
import { Experience } from './components/Experiences/Experience';
import { FeatureCard } from './components/Features/FeatureCard';
import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { Project } from './components/Projects/Project';
import { SearchEngineProject } from './components/Projects/SearchEngineProject';
import { SkilsSection } from './components/Sections/SkillsSection';
import AIMHILogo from '/assets/experience/aimhi/aimhi_logo.jpeg';
import MindHomeLogo from '/assets/experience/mindhome/mindhome_logo.jpeg';
import MC3DModelImporter from '/assets/projects/box_preview.png';
import EaterEnrollmentImg from "/assets/projects/eaterenrollment.png";
import LifeCalendarsImg from "/assets/projects/life_calendars.png";
import WhereDidTheWeeksGoImg from "/assets/projects/life_in_weeks.png";
import ModelScope3DImg from "/assets/projects/ModelScope.PNG";
import PathTracerImg from "/assets/projects/snorlax_path_traced.PNG";
import VoxelGameImg from "/assets/projects/voxelgameengine.png";

import AIMHILandingPage from '/assets/experience/aimhi/landing_page.png';
import PostList from '/assets/experience/aimhi/post_list.png';
import AdGeneration from '/assets/experience/aimhi/ad_generation.png';
import CaptionGeneration from '/assets/experience/aimhi/caption_generation.png';
import AccountSelection from '/assets/experience/aimhi/account_selection.png';
import PostUploading from '/assets/experience/aimhi/post_uploading.png';

import WiringDiagram from '/assets/experience/mindhome/communication_diagram.png';
import FireDetections1 from '/assets/experience/mindhome/fire_detections_1.png';
import FireDetections2 from '/assets/experience/mindhome/fire_detections_2.png';

function App() {
    return (
        <div className="w-full px-[5%] md:px-[15%]">
            <div className="bg h-full w-full"></div>
            <NavBar/>
            <Intro/>
            <Divider style={{ backgroundColor: "#444" }} />
            <SkilsSection/>
            <Divider style={{backgroundColor: "#444"}}/>
            <section id="experience-section" className="flex flex-col py-8 gap-8">
                <Experience
                    title="AI/ML Engineer Intern"
                    organization="MindHome • Internship"
                    duration="Mar 2025 - Present"
                    companyLogo={MindHomeLogo}
                    imgs={[WiringDiagram, FireDetections1, FireDetections2]}
                    tags={["Python", "C++", "YOLOv8", "ESP32"]}
                >
                    <FeatureCard title="Realtime Fire Detection" text="Developed a fire/smoke detection system using ESP32 and Jetson Nano with real-time sensors and AI inference." img={<LocalFireDepartmentIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="ESP32 Firmware" text="Built firmware for ESP32 to stream camera video, read environmental sensors over I2C, and expose a web API." img={<DeveloperBoardIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="YOLOv8 Training" text="Trained a YOLOv8 model for fire/smoke detection by aggregating, cleaning, and relabeling multiple datasets." img={<ModelTrainingIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Jetson Integration" text="Integrated the model on Jetson Nano to perform real-time inference and POST results back to the ESP32." img={<WifiIcon style={{ color: 'white' }}/>}/>
                </Experience>
                <Divider style={{backgroundColor: "#444"}}/>
                <Experience
                    title="Full Stack Developer Intern"
                    organization="AIM-HI • Internship"
                    duration="Feb 2025 - May 2025"
                    companyLogo={AIMHILogo}
                    imgs={[AIMHILandingPage, PostList, AdGeneration, CaptionGeneration, AccountSelection, PostUploading]}
                    tags={["React", "JavaScript", "Node.js", "Tailwind CSS"]}
                >
                    <FeatureCard title="AI Ad Generation" text="Built AI-powered features enabling image and video ad generation using OpenAI, Runway, and Google Veo." img={<AutoAwesomeIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Social Media Integration" text="Integrated posting capabilities for Facebook, Instagram, TikTok, and LinkedIn via OAuth 2.0 and platform APIs." img={<ShareIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Cloud Functions" text="Developed backend APIs using Node.js to handle AI generation, authentication, and social media posting." img={<CloudIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="UI Components" text="Created scalable, reusable components for content generation, account management, and publishing workflows." img={<BuildIcon style={{ color: 'white' }}/>}/>
                </Experience>
            </section>
            <Divider style={{backgroundColor: "#444"}}/>
            <section id="projects-section" className="flex flex-col py-8 gap-8">
                <Project 
                    title="Eater Enrollment" 
                    description="Search for courses and manage class schedules at UCI."
                    repoName="Eater-Enrollment"
                    repoLink="https://github.com/KevinPNguy01/Eater-Enrollment"
                    imgSrc={EaterEnrollmentImg}
                    imgAlt="Eater Enrollment screenshot"
                    tags={["React", "TypeScript", "GraphQL", "Redux", "Tailwind CSS"]}
                >
                    <FeatureCard title="Course Lookup" text="Search for courses across multiple quarters and view details such as availability and descriptions." img={<SearchIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Search Refinement" text="Filter by numerous criteria such as meeting times and availability." img={<FilterAltIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Multiple Schedules" text="Create and manage multiple schedules for different quarters." img={<DynamicFeedIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Visual Interface" text="An intuitive calendar interface that supports both added courses and user-created events." img={<EventIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Built-in Map" text="An integrated map to see where classes are and on which days." img={<MapIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="Life Calendars" 
                    description="Visualize daily activity across Strava, LeetCode, and GitHub."
                    repoName="Life-Calendars"
                    repoLink="https://github.com/KevinPNguy01/Life-Calendars"
                    imgSrc={LifeCalendarsImg}
                    imgAlt="Life Calendars screenshot"
                    tags={["React", "TypeScript", "Tailwind CSS"]}
                >
                    <FeatureCard title="Visual Calendars" text="Visualize data in a colorful and streamlined calendar interface." img={<CalendarMonthIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Configurable Timespan" text="Compare progress across the years by selecting the desired year." img={<AccessTimeIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Synced Data" text="Data is synced on refresh to ensure it is accurate and up-to-date." img={<SyncIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Data Caching" text="Caching is used to reduce the number of API calls needed." img={<StorageIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="ModelScope3D" 
                    description="A lightweight 3D model editor developed with TypeScript and WebGL."
                    repoName="ModelScope3D"
                    repoLink="https://github.com/KevinPNguy01/ModelScope3D"
                    imgSrc={ModelScope3DImg}
                    imgAlt="ModelScope3D screenshot"
                    tags={["WebGL", "React", "TypeScript", "TailwindCSS", "Redux"]}
                >
                    <FeatureCard title="Configurable Lighting" text="Add and fine-tune multiple light sources to create the perfect scene." img={<LightbulbIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Textured Models" text="View your models with mapped textures in real time." img={<TextureIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Custom Materials" text="Configure material properties for models without textures." img={<PaletteIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Model Transformations" text="Apply precise transformations with versatile tools." img={<BuildIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="File Conversion" text="Export models to other supported file formats." img={<InsertDriveFileIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="Where did the Weeks Go?" 
                    description="A web app to visualize how many weeks you have in your life."
                    repoName="Where-did-the-Weeks-Go"
                    repoLink="https://github.com/KevinPNguy01/Where-did-the-Weeks-Go"
                    imgSrc={WhereDidTheWeeksGoImg}
                    imgAlt="Where did the Weeks Go Screenshot"
                    tags={["React", "TypeScript", "Tailwind CSS"]}
                >
                    <FeatureCard title="Personalized Lifespan" text="Enter in your own birthdate and life expectancy to see the weeks that represents your own life." img={<CakeIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Daily Activities" text="Input activities performed daily to see their impact on the weeks you have left." img={<DirectionsRunIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Custom Colors" text="Customize your calendar by setting colors for each daily activity." img={<PaletteIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="Real-time Path Tracer" 
                    description="A real-time rendering engine that simulates realistic lighting, developed in C++."
                    repoName="Realtime-Path-Tracer-v2"
                    repoLink="https://github.com/KevinPNguy01/Realtime-Path-Tracer-v2/tree/master"
                    imgSrc={PathTracerImg}
                    imgAlt="Cornell Box Render"
                    tags={["C++", "WinAPI"]}
                >
                    <FeatureCard title="Realistic Lighting" text="Support for numerous materials such as diffuse surfaces, reflective materials, and configurable light sources." img={<LightbulbIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="AI Denoising" text="Integrated AI denoising to significantly accelerate rendering and enhance image quality." img={<PsychologyIcon style={{color: 'white'}}/>}/>
                    <FeatureCard title="Interactivity" text="Keyboard and mouse controls allow for real-time camera positioning and rotation." img={<MouseIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Performance Optimizations" text="Leveraged multithreading to parellalize lighting computations, enabling real-time interactivity." img={<SettingsSuggestIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="Voxel Game Engine" 
                    description="A Minecraft-inspired voxel game written in C++ and using OpenGL."
                    repoName="Voxel-Game-Engine"
                    repoLink="https://github.com/KevinPNguy01/Voxel-Game-Engine"
                    imgSrc={VoxelGameImg}
                    imgAlt="In-game screenshot"
                    tags={["C++", "OpenGL", "GLSL", "GLFW"]}
                >
                    <FeatureCard title="Infinite Terrain" text="Infinite procedurally generated terrain using perlin noise." img={<TerrainIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Break/Place Blocks" text="Block placing and breaking mechanics using raycasting." img={<EditIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Chunk Management" text="Chunk-based rendering system dynamically loads and unloads chunks nearby the player." img={<GpsFixedIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Performance Optimizations" text="Techniques such as frustum culling and face culling enhance performance." img={<SettingsSuggestIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <Project 
                    title="Minecraft 3D Model Importer" 
                    description="A Minecraft mod that allows you to import, transform, and place 3D Models into your worlds."
                    repoName="MC-3D-Model-Importer"
                    repoLink="https://github.com/KevinPNguy01/MC-3D-Model-Importer"
                    imgSrc={MC3DModelImporter}
                    imgAlt="Mod preview screenshot"
                    tags={["Java", "Forge", "Gradle"]}
                >
                    <FeatureCard title="Graphical Preview" text="A real-time voxelized preview makes it easy to visualize the model and see where it would be placed." img={<ViewInArIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Texture Mapping" text="Model textures are mapped by matching pixels to the visually most similar blocks." img={<TextureIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="3D Transformations" text="Translate, rotate, and scale models in-game using intuitive mouse and keyboard controls." img={<TransformIcon style={{ color: 'white' }}/>}/>
                    <FeatureCard title="Multiple File Formats" text="Support for both the STL file format and OBJ file format with textures." img={<InsertDriveFileIcon style={{ color: 'white' }}/>}/>
                </Project>
                <Divider style={{backgroundColor: "#444", width: "90%"}}/>
                <SearchEngineProject/>
            </section>
        </div>
    );
}

export default App;
