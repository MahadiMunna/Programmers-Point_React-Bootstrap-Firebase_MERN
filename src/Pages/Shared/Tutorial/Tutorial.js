import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tutorial = ({ tutorial }) => {
    console.log(tutorial)
    const { tutorial_id, tutorial_name, price } = tutorial;
    console.log(tutorial_name)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{tutorial_name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <Button variant='primary'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/tutorial/${tutorial_id}`}>Enroll now <FaArrowRight></FaArrowRight></Link></Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Tutorial;