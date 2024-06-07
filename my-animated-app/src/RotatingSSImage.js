// src/RotatingSS.js
import React from 'react';
import './RotatingSSImage.css';
import SunSalutations from './SunSalutations.png';

const RotatingSSImage = () => {
    return (
        <div className="rotating-ss-container">
            <img src={SunSalutations} alt="Sun Salutations" className="rotating-ss" />
        </div>
    );
};

export default RotatingSSImage;