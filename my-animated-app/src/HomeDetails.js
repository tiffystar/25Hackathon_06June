//HomeDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WarriorPosesImage from './WarriorPosesImage';
import RotatingSSImage from './RotatingSSImage';
import './App.css';


function HomeDetails() {
    const navigate = useNavigate();

    // function that uses navigate to go to the /warriorPoses route.
    const handleWarriorPosesClick = () => {
        navigate('/warriorPosesPage');
    };
    const handleSunSalutationsClick = () => {
        navigate('/sunSalutations');
    };

    return (
        <>
            <h1>Move Your Asanas!</h1>
            <div id="warrior-sun">
                <div className="warrior-sun-item" onClick={handleWarriorPosesClick} style={{ cursor: 'pointer' }}>
                    {/* //Add style={{ cursor: 'pointer' }} to change the cursor to a pointer, 
                    indicating that it is clickable. */}
                    <h3>Warrior Poses</h3>
                    <WarriorPosesImage />
                </div>
                <div className="warrior-sun-item" onClick={handleSunSalutationsClick} style={{ cursor: 'pointer' }}>
                    <h3>Sun Salutations</h3>
                    <RotatingSSImage />
                </div>
            </div>
            <ul>
                <li>
                    <h3>Various Poses</h3>
                </li>
                <ul>
                    <li>
                        <Link to='/standing'>Standing</Link>
                    </li>
                    <li>
                        <Link to='/balancing'>Balancing</Link>
                    </li>
                    <li>
                        <Link to='/inversions'>Inversions</Link>
                    </li>
                    <li>
                        <Link to='/core'>Core</Link>
                    </li>
                </ul>
            </ul>
            
        </>

    )
}
export default HomeDetails;