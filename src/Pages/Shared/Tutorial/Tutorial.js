import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tutorial = ({ tutorial }) => {
    const { tutorial_id, tutorial_name, price, imgURL } = tutorial;
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{tutorial_name}</Card.Title>
                    <Card.Text>Course fee: {price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='primary'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/tutorial/${tutorial_id}`}>Enroll Now <FaArrowRight></FaArrowRight></Link></Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Tutorial;