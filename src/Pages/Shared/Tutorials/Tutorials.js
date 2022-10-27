import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Tutorial from '../Tutorial/Tutorial';

const Tutorials = () => {
    const tutorials=useLoaderData();
    console.log(tutorials);
    return (
        <Container>
            <div className='row gap-4 mt-5'>
            {
                tutorials.map(tutorial=><Tutorial key={tutorial.tutorial_id} tutorial={tutorial}></Tutorial>)
            }
        </div>
        </Container>
    );
};

export default Tutorials;