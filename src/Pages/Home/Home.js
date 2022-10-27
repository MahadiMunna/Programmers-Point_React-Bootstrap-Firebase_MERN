import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tutorial from '../Shared/Tutorial/Tutorial';

const Home = () => {
    const tutorials = useLoaderData();
    console.log(tutorials)
    return (
        <div>
            <h2 className='text-success text-center mt-4'>Welcome to Programmers Point</h2>
            <div className='row gap-4 mt-4 mx-4 justify-content-center'>
                {
                    
                    tutorials.map(tutorial=><Tutorial key={tutorial.tutorial_id} tutorial={tutorial}></Tutorial>)
                    
                }
            </div>
        </div>
    );
};

export default Home;