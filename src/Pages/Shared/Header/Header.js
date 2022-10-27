import React, { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Image style={{ width: '30px',marginRight:'5px' }} src='https://i.ibb.co/hcYqtTX/5-54852-logo-computer-programming.jpg'></Image>
                    <Navbar.Brand><Link className='text-primary logo-text fw-bold me-5' to='/'>Programmers Point</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link className='links' to='/courses'>Courses</Link>
                            <Link className='links' to='/faq'>FAQ</Link>
                            <Link className='links' to='/blog'>Blog</Link>
                            {
                                user?.uid ?
                                    <>
                                        <Image
                                            style={{ height: '30px' }} 
                                            roundedCircle 
                                            src={user?.photoURL}
                                            title={user?.displayName}
                                        ></Image>
                                        <Link onClick={handleLogOut} className='ms-2 links' to='/login'>Log out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='links' to='/login'>Login</Link>
                                        <Link className='links' to='/register'>Register</Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;