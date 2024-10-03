import { Divider } from '@mui/material';
import './App.css';
import { EaterEnrollment } from './components/EaterEnrollment';
import { Intro } from './components/Intro';
import { Languages } from './components/Lanuages';
import { MinecraftMod } from './components/MinecraftMod';

function App() {
  return (
    <>
    <Intro/>
    <Languages/>
    <Divider/>
    <EaterEnrollment/>
    <MinecraftMod/>
    </>
  );
}

export default App;
