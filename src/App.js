import { Divider } from '@mui/material';
import './App.css';
import { EaterEnrollment } from './components/EaterEnrollment';
import { Intro } from './components/Intro';
import { Languages } from './components/Lanuages';
import { MinecraftMod } from './components/MinecraftMod';
import { VoxelGameEngine } from './components/VoxelGameEngine';

function App() {
  return (
    <>
    <Intro/>
    <Languages/>
    <Divider/>
    <EaterEnrollment/>
    <MinecraftMod/>
    <VoxelGameEngine/>
    </>
  );
}

export default App;
