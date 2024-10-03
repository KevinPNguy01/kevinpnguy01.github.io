import EditIcon from '@mui/icons-material/Edit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TerrainIcon from '@mui/icons-material/Terrain';
import { FeatureCard } from './FeatureCard';

export function VoxelGameEngine() {
    return (
        <div className="bg-black m-[5%]">
            <div className="grid grid-cols-2">
                <div className="p-8">
                    <h2 className="text-white font-bold text-4xl">
                        Voxel Game Engine
                    </h2>
                    <span className="text-neutral-400 font-semibold text-lg">
                    A Minecraft-inspired voxel game written in C++ and using OpenGL.
                    </span>
                    <div className="flex flex-col gap-4">
                        <FeatureCard title="Infinite Terrain" text="Infinite procedurally generated terrain using perlin noise." img={<TerrainIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Break/Place Blocks" text="Block placing and breaking mechanics using raycasting." img={<EditIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Chunk Management" text="Chunk-based rendering system dynamically loads and unloads chunks nearby the player." img={<GpsFixedIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Performance Optimizations" text="Techniques such as frustum culling and face culling enhance performance." img={<SettingsSuggestIcon style={{ color: 'white' }}/>}/>
                    </div>
                </div>
                <div className="border border-neutral-500 bg-neutral-900 rounded-xl p-4 h-fit">
                    <img src={require('../assets/voxelgameengine.png')} alt="Eater Enrollment screenshot"/>
                </div>
            </div>
        </div>
    )
}