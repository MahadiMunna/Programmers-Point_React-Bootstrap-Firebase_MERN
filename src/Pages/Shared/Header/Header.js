import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Image src=''></Image>
                    <Navbar.Brand><Link className='text-primary logo-text fw-bold me-5' to='/'>Programmers Point</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link className='links' to='/courses'>Courses</Link>
                            <Link className='links' to='/faq'>FAQ</Link>
                            <Link className='links' to='/blog'>Blog</Link>
                            <Link className='links' to='/login'>Login</Link>
                            <Link className='links' to='/register'>Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;