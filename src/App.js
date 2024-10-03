import { Divider } from '@mui/material';
import './App.css';
import { EaterEnrollment } from './components/EaterEnrollment';
import { Intro } from './components/Intro';
import { Languages } from './components/Lanuages';

function App() {
  return (
    <>
    <Intro/>
    <Languages/>
    <Divider/>
    <EaterEnrollment/>
    </>
  );
}

export default App;
