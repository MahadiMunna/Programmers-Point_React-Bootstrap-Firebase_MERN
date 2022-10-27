import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tutorial from '../Tutorial/Tutorial';

const Tutorials = () => {
    const tutorials=useLoaderData();
    console.log(tutorials);
    return (
        <div>
            {
                tutorials.map(tutorial=><Tutorial key={tutorial.tutorial_id} tutorial={tutorial}></Tutorial>)
            }
        </div>
    );
};

export default Tutorials;