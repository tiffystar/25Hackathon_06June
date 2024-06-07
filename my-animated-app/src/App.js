// src/App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeDetails from './HomeDetails';
import WarriorPosesPage from './WarriorPosesPage';
import SunSalutations from './SunSalutations';
import Standing from './Standing';
import Balancing from './Balancing';
import Inversions from './Inversions';
import Core from './Core';


function App() {
    return (
        <div className="App">
            <HomeDetails />
                <Routes>
                    <Route path="/warriorposes" element={<WarriorPosesPage />} />
                    <Route path="/sunSalutations" element={<SunSalutations />} />
                    <Route path="/standing" element={<Standing />} />
                    <Route path="/balancing" element={<Balancing />} />
                    <Route path="/inversions" element={<Inversions />} />
                    <Route path="/core" element={<Core />} />
                </Routes>
        </div>
    );
}

export default App;
