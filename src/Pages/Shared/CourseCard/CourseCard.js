import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, details, imgURL } = course;
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='primary'><Link style={{ textDecoration: 'none',color:'white' }} to={`/tutorials/${id}`}>Tutorials <FaArrowRight></FaArrowRight></Link></Button>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default CourseCard;