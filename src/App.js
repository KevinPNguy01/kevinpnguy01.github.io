import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MapIcon from '@mui/icons-material/Map';
import MouseIcon from '@mui/icons-material/Mouse';
import SearchIcon from '@mui/icons-material/Search';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TerrainIcon from '@mui/icons-material/Terrain';
import TextureIcon from '@mui/icons-material/Texture';
import TransformIcon from '@mui/icons-material/Transform';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Divider } from '@mui/material';
import './App.css';
import { FeatureCard } from './components/FeatureCard';
import { Intro } from './components/Intro';
import { Project } from './components/Project';
import { SearchEngineProject } from './components/SearchEngineProject';
import { TechChip } from './components/TechChip';

function App() {
    return (
        <>
        <div className="bg"></div>
        <Intro/>
        <Divider style={{backgroundColor: "#222"}}/>
        <Project 
            title="Eater Enrollment" 
            description="Search for courses and manage class schedules at UCI."
            repoName="Eater-Enrollment"
            repoLink="https://github.com/KevinPNguy01/Eater-Enrollment"
            img={<img src={require("./assets/eaterenrollment.png")} alt="Eater Enrollment screenshot"/>}
            tags={<>
                <TechChip label="React"/>
                <TechChip label="TypeScript"/>
                <TechChip label="Tailwind CSS"/>
                <TechChip label="Redux"/>
                <TechChip label="GraphQL"/>
                <TechChip label="Firebase"/>
            </>}
        >
            <FeatureCard title="Course Lookup" text="Search for courses across multiple quarters and view details such as availability and descriptions." img={<SearchIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Search Refinement" text="Filter by numerous criteria such as meeting times and availability." img={<FilterAltIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Multiple Schedules" text="Create and manage multiple schedules for different quarters." img={<DynamicFeedIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Visual Interface" text="An intuitive calendar interface that supports both added courses and user-created events." img={<EventIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Built-in Map" text="An integrated map to see where classes are and on which days." img={<MapIcon style={{ color: 'white' }}/>}/>
        </Project>
        <div className="w-full flex justify-center">
            <Divider style={{backgroundColor: "#444", width: "90%"}}/>
        </div>
        <Project 
            title="Real-time Ray Tracer" 
            description="A real-time path tracing engine developed in C++ and using the WinAPI."
            repoName="Software-Ray-Tracer"
            repoLink="https://github.com/KevinPNguy01/Software-Ray-Tracer/tree/master"
            img={<img src={require("./assets/cornell_box.PNG")} alt="Cornell Box Render"/>}
            tags={<>
                <TechChip label="C++"/>
                <TechChip label="WinAPI"/>
            </>}
        >
            <FeatureCard title="Adaptive Resolution" text="Renders start at low quality and progressively doubles the sample quality when the camera is stationary." img={<ZoomInIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Realistic Lighting" text="Support for numerous materials such as diffuse surfaces, reflective materials, and configurable light sources." img={<LightbulbIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Interactivity" text="Keyboard and mouse controls allow for real-time camera positioning and rotation." img={<MouseIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Performance Optimizations" text="Leveraged multithreading to render jobs in parallel, resulting in a 10x speedup." img={<SettingsSuggestIcon style={{ color: 'white' }}/>}/>
        </Project>
        <div className="w-full flex justify-center">
            <Divider style={{backgroundColor: "#444", width: "90%"}}/>
        </div>
        <Project 
            title="Voxel Game Engine" 
            description="A Minecraft-inspired voxel game written in C++ and using OpenGL."
            repoName="Voxel-Game-Engine"
            repoLink="https://github.com/KevinPNguy01/Voxel-Game-Engine"
            img={<img src={require("./assets/voxelgameengine.png")} alt="In-game screenshot"/>}
            tags={<>
                <TechChip label="C++"/>
                <TechChip label="OpenGL"/>
                <TechChip label="GLSL"/>
                <TechChip label="GLFW"/>
            </>}
        >
            <FeatureCard title="Infinite Terrain" text="Infinite procedurally generated terrain using perlin noise." img={<TerrainIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Break/Place Blocks" text="Block placing and breaking mechanics using raycasting." img={<EditIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Chunk Management" text="Chunk-based rendering system dynamically loads and unloads chunks nearby the player." img={<GpsFixedIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Performance Optimizations" text="Techniques such as frustum culling and face culling enhance performance." img={<SettingsSuggestIcon style={{ color: 'white' }}/>}/>
        </Project>
        <div className="w-full flex justify-center">
            <Divider style={{backgroundColor: "#444", width: "90%"}}/>
        </div>
        <Project 
            title="Minecraft 3D Model Importer" 
            description="A Minecraft mod that allows you to import, transform, and place 3D Models into your worlds."
            repoName="MC-3D-Model-Importer"
            repoLink="https://github.com/KevinPNguy01/MC-3D-Model-Importer"
            img={<img src={require('./assets/box_preview.png')} alt="Mod preview screenshot"/>}
            tags={<>
                <TechChip label="Java"/>
                <TechChip label="Forge"/>
                <TechChip label="Gradle"/>
            </>}
        >
            <FeatureCard title="Graphical Preview" text="A real-time voxelized preview makes it easy to visualize the model and see where it would be placed." img={<ViewInArIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Texture Mapping" text="Model textures are mapped by matching pixels to the visually most similar blocks." img={<TextureIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="3D Transformations" text="Translate, rotate, and scale models in-game using intuitive mouse and keyboard controls." img={<TransformIcon style={{ color: 'white' }}/>}/>
            <FeatureCard title="Multiple File Formats" text="Support for both the STL file format and OBJ file format with textures." img={<InsertDriveFileIcon style={{ color: 'white' }}/>}/>
        </Project>
        <div className="w-full flex justify-center">
            <Divider style={{backgroundColor: "#444", width: "90%"}}/>
        </div>
        <SearchEngineProject/>
        </>
    );
}

export default App;
