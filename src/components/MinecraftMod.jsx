import TextureIcon from '@mui/icons-material/Texture';
import TransformIcon from '@mui/icons-material/Transform';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { FeatureCard } from './FeatureCard';

export function MinecraftMod() {
    return (
        <div className="bg-black m-[5%]">
            <div className="grid grid-cols-2">
                <div className="border border-neutral-500 bg-neutral-900 rounded-xl p-4 h-fit">
                    <img src={require('../assets/box_preview.png')} alt="Eater Enrollment screenshot"/>
                </div>
                <div className="p-8">
                    <h2 className="text-white font-bold text-4xl">
                        Minecraft 3D Model Importer
                    </h2>
                    <span className="text-neutral-400 font-semibold text-lg">
                        A Minecraft mod that allows you to import, transform, and place 3D Models into your worlds.
                    </span>
                    <div className="flex flex-col gap-4">
                        <FeatureCard title="Graphical Preview" text="A real-time voxelized preview makes it easy to visualize the model and see where it would be placed." img={<ViewInArIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Texture Mapping" text="Model textures are mapped by matching pixels to the visually most similar blocks." img={<TextureIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="3D Transformations" text="Translate, rotate, and scale models in-game using intuitive mouse and keyboard controls." img={<TransformIcon style={{ color: 'white' }}/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}