// src/WarriorPoses.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';

const WarriorPoses = () => {
    //initializes index to 0 and provides a way to update it.
    const [index, setIndex] = useState(0);
    const poses = [
//this array holds objects, each representing a yoga pose with an id and src (source of the image).
        { id: 0, src: '/warrior1.png' },
        { id: 1, src: '/warrior2.png' },
        { id: 2, src: '/warrior3.png' }
    ];
//takes a configuration object as an argument '{opacity}'
//'useSpring' is a hook from React Spring that returns animated values
// and allows you to define animation properties.
    const { opacity } = useSpring({
        from: { opacity: 0 }, // opacity: 0 is fully transparent
        to: { opacity: 1 }, // opacity: 1 is fully opaque
        reset: true, //ensures that the animation restarts from the initial state every time
        reverse: index % 2 === 0, 
        //reverse makes the animation go back and forth, creating a smooth loop
        onRest: () => setIndex((state) => (state + 1) % poses.length),
        //A callback function called when the animation completes
        // used to update the index state, moving to the next image
        config: { duration: 2000 },// sets the duration of the animation
    });

    return (
        <div className="yoga-poses">
            <animated.img // an animated version of the img tag from React Spring.
            //this element is used to display the yoga pose images
                src={poses[index].src}
                //Set to the current pose's image source, determined by poses[index].src
                //poses[index] retrieves the obj from the poses array at current index
                style={{ opacity }}
                //Applies the animated opacity style.
                alt={`Warrior Pose ${index + 1}`}
                width={300} //alternative text
            />
        </div>
    );
};

export default WarriorPoses;
//projects/25Hackathon/my-animated-app